import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

import { FaUser, FaTruckMoving } from "react-icons/fa";
import { MdLocationPin } from "react-icons/md";

import "./Checkout.css";
import CheckoutTable from "./CheckoutTable";
import CheckoutItem from "./CheckoutItem";
import Row from "./Row";
import CheckoutItemMedia from "./CheckoutItemMedia";
import { createOrderRequest } from "../../Redux/Actions/OrderActions";

const Checkout = () => {
  const { user } = useSelector((state) => state.user);
  const { cartItems, total } = useSelector((state) => state.cart);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOrder = () => {
    if (user) {
      const shippingPrice = total > 1000 ? 0 : 100;
      const taxPrice = (0.15 * total).toFixed(2);
      const newOrder = {
        userId: user?._id,
        orderItems: cartItems,
        shippingAddress: {
          address: user?.shippingAddress.address,
          city: user?.shippingAddress.city,
          postalCode: user?.shippingAddress.postalCode,
          country: user?.shippingAddress.country,
        },
        paymentMethod: "Debit/Credit Card",
        itemsPrice: total,
        taxPrice: taxPrice,
        shippingPrice: shippingPrice,
        totalPrice: Number(total) + Number(taxPrice) + Number(shippingPrice),
      };
      dispatch(createOrderRequest(newOrder));
      navigate("/");
    }
  };

  if (!user) return <Navigate to="/" />;

  return (
    <div className="checkout">
      <div className="checkout-banner">
        <Row type={0} icon={<FaUser size={28} />} qty={cartItems?.length} />
        <Row
          type={1}
          icon={<FaTruckMoving size={28} />}
          qty={cartItems?.length}
        />
        <Row
          type={2}
          icon={<MdLocationPin size={28} />}
          qty={cartItems?.length}
        />
      </div>
      <div className="checkout-details">
        <div className="checkout-item-details">
          {cartItems &&
            cartItems?.length > 0 &&
            cartItems.map((item) => <CheckoutItem item={item} key={item.id} />)}
          {cartItems &&
            cartItems?.length > 0 &&
            cartItems.map((item) => (
              <CheckoutItemMedia item={item} key={item.id} />
            ))}
        </div>
        <div className="shipping-details">
          <CheckoutTable />
          <button onClick={handleOrder}>Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
