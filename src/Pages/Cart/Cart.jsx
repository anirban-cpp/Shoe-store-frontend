import React from "react";
import { useSelector } from "react-redux";

import EmptyCart from "./Cart/EmptyCart";
import CartItems from "./Cart/CartItems"

import "./Cart.css";

const Cart = () => {
  const { user } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);

  if (cartItems?.length === 0) {
    if (user) {
      return (
        <div className="cart">
          <EmptyCart
            text="Your cart is empty"
            path="/"
            btntext="Continue Shopping"
          />
        </div>
      );
    } else {
      return (
        <EmptyCart
          text="Please Login to view your cart"
          path="/login"
          btntext="Login"
        />
      );
    }
  }
  else {
    return (
      <CartItems/>
    )
  }
};

export default Cart;
