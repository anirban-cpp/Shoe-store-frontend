import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";

import profilepic from "../../assets/profile-pic.svg";
import {
  getFilteredUserOrdersRequest,
  getUserOrdersRequest,
} from "../../Redux/Actions/OrderActions";
import OrderItem from "./OrderItem";

import { order_status_types } from "../../Data";

import "./Orders.css";
import NoOrders from "./NoOrders";

const Orders = () => {
  const { id } = useParams();

  const [status, setStatus] = useState(0);
  const [sort, setSort] = useState(0);

  const { orderedItems, loading, error } = useSelector(
    (state) => state.getorder
  );
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserOrdersRequest(id));
  }, []);

  useEffect(() => {
    if (status !== 0 || sort !== 0) {
      dispatch(
        getFilteredUserOrdersRequest({
          status: status,
          order: sort,
          id: id,
        })
      );
    } else dispatch(getUserOrdersRequest(id));
  }, [status, sort]);

  if (!user) return <Navigate to="/login" state={{ path: "/profile" }} />;

  if (error) return <div>{error}</div>;

  return (
    <div className="orders">
      <div className="info-filters">
        <div className="user-details">
          <img src={profilepic} alt="pic" />
          <span>
            <p style={{ fontSize: "0.7rem", marginBottom: "0" }}>Hello,</p>
            <p
              style={{
                fontWeight: "bold",
                fontSize: "1rem",
                marginBottom: "0",
                marginTop: "0.5rem",
              }}
            >
              {user?.name}
            </p>
          </span>
        </div>
        <div className="order-filters">
          <h3>Filters</h3>
          <p>Order Status</p>
          {order_status_types.map((order_status, i) => (
            <div className="checkbox" key={i}>
              <input
                type="checkbox"
                value={status}
                onChange={() => setStatus(i + 1)}
                checked={status === i + 1}
              />
              <label>{order_status}</label>
            </div>
          ))}
          <h3>Sort By Ordered Date</h3>
          <div className="checkbox">
            <input
              type="checkbox"
              value={sort}
              onChange={() => setSort(-1)}
              checked={sort === -1}
            />
            <label>Ordered Date ( &uarr; )</label>
          </div>
          <div className="checkbox">
            <input
              type="checkbox"
              value={sort}
              onChange={() => setSort(1)}
              checked={sort === 1}
            />
            <label>Ordered Date ( &darr; )</label>
          </div>
        </div>
        <button
          onClick={() => {
            setStatus(0);
            setSort(0);
          }}
        >
          Reset Filters
        </button>
      </div>
      <div className="order-items">
        {loading ? (
          <Spinner loading={loading} />
        ) : orderedItems && orderedItems?.length > 0 ? (
          orderedItems.map((item) => {
            return (
              <React.Fragment key={item._id}>
                {item.orderItems.map((e, i) => (
                  <OrderItem
                    key={i}
                    data={e}
                    isDelivered={item.isDelivered}
                    createdAt={item.createdAt}
                    address={item.shippingAddress}
                  />
                ))}
              </React.Fragment>
            );
          })
        ) : (
          <NoOrders />
        )}
      </div>
    </div>
  );
};

export default Orders;
