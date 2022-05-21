import React from "react";

import logo from "../../../assets/logo.webp";
import Search from "./Search";
import { IoMdCart } from "react-icons/io";

import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../../Redux/Actions/UserActions";
import { EmptyCart } from "../../../Redux/Actions/CartActions";
import { toast } from "react-toastify";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    dispatch(EmptyCart());
    navigate("/");
    toast.success("Logged out ✌️");
  };

  return (
    <div className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="logo" onClick={() => navigate("/")} />
        </div>
        <Search />
        <div className="links">
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
    </div>
  );
};

export default Header;
