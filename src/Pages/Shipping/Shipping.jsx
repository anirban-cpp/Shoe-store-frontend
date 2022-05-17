import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Spinner from "../../components/Spinner/Spinner";
import { updateUserRequest } from "../../Redux/Actions/UserActions";

import "./Shipping.css";

const Shipping = () => {
  const { user, loading, error } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [contact, setContact] = useState(user?.email);
  const [name, setName] = useState(user?.name);

  const [address, setaddress] = useState(user?.shippingAddress.address);
  const [city, setcity] = useState(user?.shippingAddress.city);
  const [postcalCode, setpostalCode] = useState(
    user?.shippingAddress.postalCode
  );
  const [country, setcountry] = useState(user?.shippingAddress.country);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      address !== user?.shippingAddress.address ||
      city !== user?.shippingAddress.city ||
      postcalCode !== user?.shippingAddress.postalCode ||
      country !== user?.shippingAddress.country
    ) {
      const shippingAddress = {
        address: address,
        city: city,
        postalCode: postcalCode,
        country: country,
      };
      dispatch(
        updateUserRequest({ id: user?._id, shippingAddress: shippingAddress })
      );
      setaddress("");
      setcity("");
      setpostalCode("");
      setcountry("");
    }

    if (error.trim().length === 0) {
      navigate("/checkout");
    }
  };

  if (loading) return <Spinner loading={loading} />;

  if (!user) return <Navigate to="/login" />;

  return (
    <div className="shipping">
      <div className="shipping-container">
        <p className="address-text">Delivery Address</p>
        <form onSubmit={handleSubmit}>
          <div>
            <p>Contact Details</p>
            <input
              type="text"
              value={name}
              placeholder="Enter Name*"
              onChange={(e) => setName(e.target.value)}
              required={true}
            />
            <input
              type="text"
              placeholder="Email*"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required={true}
            />
          </div>
          <div>
            <p>Address</p>
            <input
              type="text"
              value={postcalCode}
              placeholder="Pin Code*"
              onChange={(e) => setpostalCode(e.target.value)}
              required={true}
            />
            <input
              type="text"
              value={address}
              placeholder="Address (House No, Building, Street, Area)*"
              onChange={(e) => setaddress(e.target.value)}
              required={true}
            />
            <input
              type="text"
              placeholder="City / District*"
              value={city}
              onChange={(e) => setcity(e.target.value)}
              required={true}
            />
            <input
              type="text"
              placeholder="Country*"
              value={country}
              onChange={(e) => setcountry(e.target.value)}
              required={true}
            />
          </div>
          <button type="submit" onSubmit={handleSubmit}>
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default Shipping;
