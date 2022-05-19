import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import CartItem from "./CartItem";

import "./CartItems.css";

const CartItems = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { user } = useSelector((state) => state.user);
  const { cartItems, total } = useSelector((state) => state.cart);

  const handleCheckout = () => {
    if (user && cartItems?.length > 0) {
      navigate('/shipping')
    } else {
      navigate("/login", { state: { path: location.pathname } });
    }
  };

  return (
    <div className="cart-items-container">
      <div className="alert-info-box">
        Total Cart Products ({cartItems ? cartItems.length : 0})
      </div>
      {cartItems?.map((item) => (
        <CartItem key={item.id} props={item} />
      ))}
      <div className="cart-total">
        <p>
          Total : <strong>₹ {Number(total).toFixed(2)}</strong>
        </p>
      </div>
      <div className="cart-buttons">
        <button
          style={{ color: "white", backgroundColor: "black" }}
          onClick={() => navigate("/")}
        >
          Continue Shopping
        </button>
        <button
          style={{ color: "white", backgroundColor: "#1cb803" }}
          onClick={handleCheckout}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartItems;
