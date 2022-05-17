import React from "react";

const CheckoutItem = ({ item }) => {
  return (
    <div className="checkout-item">
      <div className="checkout-item-image">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="checkout-item-product">
        <p className="checkout-item-brand">{item.brand}</p>
        <p className="checkout-item-title">
          {item.title.length > 40
            ? item.title.substring(0, 40) + "..."
            : item.title}
        </p>
      </div>
      <div className="checkout-item-quantity">
        <p className="checkout-item-brand">Quantity</p>
        <p className="checkout-item-title">{item.quantity}</p>
      </div>
      <div className="checkout-item-subtotal">
        <p className="checkout-item-brand">Subtotal</p>
        <p className="checkout-item-title">₹ {item.price * item.quantity}</p>
      </div>
    </div>
  );
};

export default CheckoutItem;
