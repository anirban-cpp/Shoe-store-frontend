import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import ImageSlider from "../ImageSlider/ImageSlider";

import "./Product.css";

const Product = (props) => {
//   const [idx, setIdx] = useState(0);
//   const intervalRef = useRef();

//   const changeImage = () => {
//     intervalRef.current = setInterval(() => {
//       setIdx((previdx) => (previdx + 1) % 3);
//     }, 1000);
//   };

  const navigate = useNavigate();

  return (
    <div className="product">
      <div className="product-container" onClick={() => navigate(`product/${props.id}`)}>
        <div className="product-image">
          <ImageSlider props={props.images} />
        </div>
        <div className="rating">
          <p>
            {props.rating} <AiFillStar color="gold" stroke="yellow" size={15} />{" "}
            | {props.reviews}
          </p>
        </div>
        <p className="product-brand">{props.brand}</p>
        <p className="product-title">{props.title}</p>
        <div className="product-price">
          <p className="price-new">Rs. {props.new_price}</p>
          <p className="price-old">Rs. {props.old_price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
