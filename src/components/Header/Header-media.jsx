import React from "react";

import logo from "../../assets/logo.png";
import Search from "./Search";
import { IoMdCart } from "react-icons/io";

import "./Header.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/Actions/UserActions";
import { EmptyCart } from "../../Redux/Actions/CartActions";

const Headermedia = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(EmptyCart());
    navigate("/");
  };

  return (
    <div className="header-media">
      <div className="header-media-container">
        <div className="header-media-row1">
          <div className="logo">
            <img src={logo} alt="logo" onClick={() => navigate("/")} />
          </div>
          <div className="links">
            {/* <p onClick={() => navigate("register")}>REGISTER</p>
            <p onClick={() => navigate("login")}>LOGIN</p> */}
            {user ? (
              <p onClick={() => navigate("profile")}>PROFILE</p>
            ) : (
              <p onClick={() => navigate("register")}>REGISTER</p>
            )}
            {user ? (
              <p onClick={handleLogout}>LOGOUT</p>
            ) : (
              <p onClick={() => navigate("login")}>LOGIN</p>
            )}
            <div>
              <IoMdCart size={24} onClick={() => navigate("cart")} />
              <span className="cart-count">{cartItems ? cartItems.length : 0}</span>
            </div>
          </div>
        </div>
        <Search />
      </div>
    </div>
  );
};

export default Headermedia;
