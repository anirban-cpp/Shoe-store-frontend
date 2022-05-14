import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

import "./Product.css";

const Product = (props) => {

  const navigate = useNavigate();

  return (
    <div className="product">
      <div
        className="product-container"
        onClick={() => navigate(`/product/${props._id}`)}
      >
        <div className="product-image">
          <img src={props.images[0]} alt="" />
        </div>
        <div className="rating">
          <p>
            {props.rating} <AiFillStar color="gold" stroke="yellow" size={15} />{" "}
            {/* | {props.reviews.length > 0 ? props.reviews : "30"} */} { "30" }
          </p>
        </div>
        <p className="product-brand">{props.brand}</p>
        <p className="product-title">
          {props.title.length > 35
            ? props.title.substring(0, 35) + "..."
            : props.title}
        </p>
        <div className="product-price">
          <p className="price-new">Rs. {props.new_price}</p>
          <p className="price-old">Rs. {props.old_price}</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
