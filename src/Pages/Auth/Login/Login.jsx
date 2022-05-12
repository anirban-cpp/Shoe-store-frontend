import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "../Auth.css";
import Spinner from "../../../components/Spinner/Spinner";
import { loginRequest } from "../../../Redux/Actions/UserActions";

const Login = () => {
  window.scroll(0, 0);
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.user);
  const [formValue, setFormValue] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginRequest({ ...formValue }));
    setFormValue({ ...formValue, email: "", password: "" });
  };

  if (loading) return <Spinner loading={loading} />;

  if (user) {
    return <Navigate to="/" />;
  }

  return (
    <div className="auth">
      <div className="auth-container">
        <form onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={formValue.email}
            onChange={handleInput}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formValue.password}
            onChange={handleInput}
          />
          <button type="submit" onClick={handleSubmit}>
            Login
          </button>
        </form>
        <p className="others" onClick={() => navigate("/register")}>
          Create Account
        </p>
      </div>
    </div>
  );
};

export default Login;
