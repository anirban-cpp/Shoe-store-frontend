import React from "react";

import { GoPackage } from "react-icons/go";
import getDate from "../../utils/getDate";

const OrderItem = ({ createdAt, data, isDelivered, address }) => {
  const date = getDate(createdAt);

  return (
    <div className="order-item">
      <div className="order-item-top">
        <div className="icon">
          <GoPackage />
        </div>
        <div className="delivery-status">
          <p className="status-title">
            {isDelivered ? "Delivered" : "Order Confirmed"}
          </p>
          <p className="status-date">On {date}</p>
        </div>
      </div>
      <div className="order-item-bottom">
        <div className="order-item-row1">
          <div className="order-item-image">
            <img src={data.image} alt={data.title} />
          </div>
          <div className="order-item-details">
            <p className="detail-brand">
              <strong>{data.brand}</strong>
            </p>
            <p className="detail-title">{data.title}</p>
            <span>
              <p className="address">
                <strong>Delivery address: </strong>
              </p>
              <p className="order-address-text">{`${address.address}, Pin: ${address.postalCode}`}</p>
            </span>
          </div>
        </div>
        <div className="order-item-row2">
          <button className="exchange">Exchange</button>
          <button className="cancel">
            Cancel Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
