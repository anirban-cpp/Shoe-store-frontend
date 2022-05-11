import React from "react";
import { useSelector } from "react-redux";
import EmptyCart from "../../components/Cart/EmptyCart";

import "./Cart.css";

const Cart = () => {
  window.scroll(0, 0);
  const { user } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);

  // console.log(cartItems);

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
};

export default Cart;