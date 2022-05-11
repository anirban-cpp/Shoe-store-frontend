import React from "react";

import logo from "../../assets/logo.png";
import Search from "./Search";
import { IoMdCart } from "react-icons/io";

import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../Redux/Actions/UserActions";

const Header = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const count = 0;
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
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
            <span className="cart-count">{count}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
