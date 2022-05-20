import React from "react";

import { GoPackage } from "react-icons/go";
import { MdCancel } from "react-icons/md";
import { useDispatch } from "react-redux";
import { changeOrderRequest } from "../../Redux/Actions/OrderActions";
import getDate from "../../utils/getDate";
import delivered from "../../assets/confirmed.svg";

const OrderItem = ({ orderId, updatedAt, data, address }) => {
  const date = getDate(updatedAt);
  const dispatch = useDispatch();

  const handleClick = (status) => {
    dispatch(
      changeOrderRequest({
        orderId: orderId,
        status: status,
        itemId: data._id,
      })
    );
  };

  return (
    <div className="order-item">
      <div className="order-item-top">
        <div className="icon">
          {data.status.toString().trim().toLowerCase() !== "cancelled" ? (
            data.status.toString().trim().toLowerCase() === "delivered" ? (
              <>
                <GoPackage />
                <img src={delivered} alt="" />
              </>
            ) : (
              <GoPackage />
            )
          ) : (
            <MdCancel />
          )}
        </div>
        <div className="delivery-status">
          <p className="status-title">{`Order ${data.status}`}</p>
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
        {data.status.toString().trim().toLowerCase() === "cancelled" ? (
          <></>
        ) : (
          <div className="order-item-row2">
            {data.status.toString().trim().toLowerCase() === "delivered" ? (
              <button
                style={{ backgroundColor: "black" }}
                onClick={() => handleClick("Return Requested")}
              >
                Return
              </button>
            ) : data.status.toString().trim().toLowerCase() ===
              "return requested" ? (
              <button
                style={{ backgroundColor: "black" }}
                onClick={() => handleClick("Delivered")}
              >
                Cancel Return
              </button>
            ) : (
              <button
                style={{ backgroundColor: "#1cb803" }}
                onClick={() => handleClick("Cancelled")}
              >
                Cancel Order
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderItem;
