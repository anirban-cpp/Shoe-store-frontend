import React from "react";

import logo from "../../assets/logo.png";
import Search from "./Search";
import { IoMdCart } from "react-icons/io";

import "./Header.css";
import { useNavigate } from "react-router-dom";

const Headermedia = () => {
  //   const [count, setCount] = useState(0);
  const count = 0;
  const navigate = useNavigate();

  return (
    <div className="header-media">
      <div className="header-media-container">
        <div className="header-media-row1">
          <div className="logo">
            <img src={logo} alt="logo" onClick={() => navigate("/")} />
          </div>
          <div className="links">
            <p onClick={() => navigate("register")}>REGISTER</p>
            <p onClick={() => navigate("login")}>LOGIN</p>
            <div>
              <IoMdCart size={24} onClick={() => navigate("cart")} />
              <span className="cart-count">{count}</span>
            </div>
          </div>
        </div>
        <Search />
      </div>
    </div>
  );
};

export default Headermedia;
