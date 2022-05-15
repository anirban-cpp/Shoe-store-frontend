import React from "react";
import { useNavigate } from "react-router-dom";

const EmptyCart = (props) => {
  const navigate = useNavigate();

  return (
    <div className="empty-cart">
      <br />
      <br />
      <div className="empty-cart-container">
        <p>{props.text}</p>
        <button
          onClick={() => navigate(props.path, { state: { path: "/cart" } })}
        >
          {props.btntext}
        </button>
      </div>
    </div>
  );
};

export default EmptyCart;
