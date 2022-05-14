import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { getProductRequest } from "../../Redux/Actions/ProductActions";

import "./ProductDetail.css";
import Button from "../../components/Button/Button";
import Spinner from "../../components/Spinner/Spinner";
import WriteReview from "../../components/Review/WriteReview";
import { addToCart } from "../../Redux/Actions/CartActions";
import { toast } from "react-toastify";

const Lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const OtherDetails = ({ props }) => {
  const { text, value } = props;
  return (
    <div>
      <p>{text}</p>
      <p>
        {text.toLowerCase() === "price" && "₹"} {value}
      </p>
    </div>
  );
};

const Review = ({ props }) => {
  const { rating, reviews } = props;
  return (
    <div>
      <p>Rating</p>
      <p>
        {rating} <AiFillStar color="gold" stroke="yellow" size={15} /> |{" "}
        {reviews.length} Reviews
      </p>
    </div>
  );
};

const ReviewContainer = ({ review }) => {
  return (
    <div className="reviews-container">
      <p>{review.userName}</p>
      <div className="reviews-rating">
        {[...Array(Number(review.rating))].map((_e, i) => (
          <AiFillStar key={i} color="gold" size={15} />
        ))}
      </div>
      <p style={{ fontWeight: "normal" }}>
        {review.createdAt.substring(0, 10)}
      </p>
      <div className="reviews-comment">
        <p>{review.comment || ""}</p>
      </div>
    </div>
  );
};

const ProductDetail = () => {
  const { id } = useParams();
  const productId = id;

  const dispatch = useDispatch();
  const { product, loading } = useSelector((state) => state.product);
  const { user } = useSelector((state) => state.user);

  const [count, setCount] = useState(1);

  useEffect(() => {
    window.scroll(0, 0);
    dispatch(getProductRequest(productId));
  }, []);

  const others = [
    { text: "Price", value: product.new_price },
    {
      text: "Status",
      value: product.countInStock > 0 ? "In stock" : "Out of stock",
    },
  ];

  const handleCart = () => {
    dispatch(
      addToCart({
        id: product._id,
        image: product.images[0],
        brand: product.brand,
        title: product.title,
        price: product.new_price,
        quantity: count,
      })
    );
    toast.success("Item added to cart");
  };

  if (loading) return <Spinner loading={loading} />;

  return (
    <div className="productDetail">
      <div className="row1-detail">
        <div className="row1-col1">
          <img src={product.images[0]} alt={product.title} />
          <img src={product.images[1]} alt={product.title} />
        </div>
        <div className="row1-col2">
          <h1>{product.brand}</h1>
          <h3>{product.title}</h3>
          <p className="row1-col2-desc">{Lorem}</p>
          <div className="other-details">
            {others.map((item, i) => (
              <OtherDetails key={i} props={item} />
            ))}
            <Review
              props={{ rating: product.rating, reviews: product.reviews }}
            />
            <div>
              <p>Quantity</p>
              <Button
                count={count}
                increment={() => {
                  if (count > 0) setCount((prevCount) => prevCount + 1);
                }}
                decrement={() => {
                  if (count > 1) setCount((prevCount) => prevCount - 1);
                }}
              />
            </div>
          </div>
          <button className="add-to-cart" onClick={handleCart}>
            Add to cart
          </button>
        </div>
      </div>
      <div className="row2-detail">
        <div className="row2-col1" style={ product && product.reviews.length > 0 ? { justifyContent: 'space-between' } : { justifyContent: 'flex-start' }}>
          <p className="review-title">REVIEWS</p>
          {product?.reviews.length > 0 ? (
            product.reviews.map((review, i) => (
              <React.Fragment key={i}>
                <ReviewContainer review={review} />
                <br />
              </React.Fragment>
            ))
          ) : (
            <p className="NoReview">No reviews yet. Be the first one to leave a review</p>
          )}
        </div>
        <div className="row2-col2">
          <p className="review-title">Write a Customer review</p>
          {user ? (
            <WriteReview />
          ) : (
            <div className="review-container">
              <p>
                Please{" "}
                <strong>
                  " <Link to="/login">Login</Link> "
                </strong>{" "}
                to write a review
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
