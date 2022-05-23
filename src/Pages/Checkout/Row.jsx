import React from "react";
import { useSelector } from "react-redux";

const Row = ({ type, icon, qty }) => {
  const { user } = useSelector((state) => state.user);

  const heading =
    type === 0 ? "Customer" : type === 1 ? "Order Info" : "Deliver to";
  const detail_one =
    type === 0
      ? user?.name.substring(0, user?.name.indexOf(" "))
      : type === 1
      ? `Shipping: ${user?.shippingAddress.country}`
      : `${user?.shippingAddress.address}, ${user?.shippingAddress.city}, ${user?.shippingAddress.postalCode}`;
  const detail_two =
    type === 0 ? user?.email : type === 1 ? `No of items: ${qty}` : "";

  return (
    <div className="row-item">
      <div className="row-icon">{icon}</div>
      <div className="row-details">
        <h5>{heading}</h5>
        <p>{detail_one}</p>
        <p>{detail_two}</p>
      </div>
    </div>
  );
};

export default Row;
