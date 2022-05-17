import React from "react";

const CheckoutItemMedia = ({ item }) => {
  return (
    <div className="checkout-item-media">
      <div className="checkout-item-media-row">
        <div className="checkout-item-media-image">
          <img src={item.image} alt={item.title} />
        </div>
        <div className="checkout-item-media-product">
          <p className="checkout-item-media-brand">{item.brand}</p>
          <p className="checkout-item-media-title">
            {item.title.length > 40
              ? item.title.substring(0, 40) + "..."
              : item.title}
          </p>
        </div>
      </div>
      <div className="checkout-item-media-row">
        <div className="checkout-item-media-quantity">
          <p className="checkout-item-brand">Quantity</p>
          <p className="checkout-item-title">{item.quantity}</p>
        </div>
        <div className="checkout-item-media-subtotal">
          <p className="checkout-item-media-brand">Subtotal</p>
          <p className="checkout-item-title">₹ {item.price * item.quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutItemMedia;
