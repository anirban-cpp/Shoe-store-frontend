import React from "react";
import { useNavigate } from "react-router-dom";

const EmptyCart = () => {
  const navigate = useNavigate();

  return (
    <div className="empty-cart">
      <br />
      <br />
      <div className="empty-cart-container">
        <p>Your cart is empty</p>
        <button onClick={() => navigate("/")}>Continue Shopping</button>
      </div>
    </div>
  );
};

export default EmptyCart;
