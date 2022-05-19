import React from "react";
import { Button } from "./CartItem";

const CartItemMedia = ({ props }) => {
  return (
    <div className="cart-item-media">
      <div className="cart-item-media-img">
        <img src={props.image} alt={props.title} />
      </div>
      <div className="cart-item-media-row-2">
        <div className="row-top">
          <p className="cart-item-media-brand">{props.brand}</p>
          <p className="cart-item-media-title">
            {props.title.length > 40
              ? props.title.substring(0, 40) + "..."
              : props.title}
          </p>
        </div>
        <div className="row-bottom">
          <div className="cart-item-media-quantity-btn">
              <p>Quantity</p>
              <div>
                <Button props={props} />
              </div>
          </div>
          <div className="cart-item-media-subtotal">
            <p style={{ fontSize: '1rem', color: 'gray', marginTop: 0 }}>Subtotal</p>
            <p style={{ fontSize: '0.8rem', marginBottom: 0, textAlign: 'right' }}>
              <strong>₹ {Number(props.price) * Number(props.quantity)}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItemMedia;
