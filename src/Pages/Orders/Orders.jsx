import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useParams } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";

import { getUserOrdersRequest } from "../../Redux/Actions/OrderActions";
import OrderItem from "./OrderItem";

import "./Orders.css";

const Orders = () => {
  const { id } = useParams();

  const { orderedItems, loading, error } = useSelector(
    (state) => state.getorder
  );
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserOrdersRequest(id));
  }, []);

  if (loading) return <Spinner loading={loading} />;

  if (error) return <div>{error}</div>;

  if (!user) return <Navigate to="/login" state={{ path: "/profile" }} />;

  return (
    <div className="orders">
      {orderedItems.map((item) => {
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
      })}
    </div>
  );
};

export default Orders;
