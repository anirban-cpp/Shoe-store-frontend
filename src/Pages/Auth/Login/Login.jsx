import React, { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "../Auth.css";
import Spinner from "../../../components/Spinner/Spinner";
import { loginRequest } from "../../../Redux/Actions/UserActions";
import { toast } from "react-toastify";

const Login = () => {
  window.scroll(0, 0);
  const location = useLocation();
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
    if (formValue.email.trim().length === 0)
      toast.error("Please provide your email");
    else if (formValue.password.trim().length === 0)
      toast.error("Please provide your password");
    else {
      dispatch(loginRequest({ ...formValue }));
      setFormValue({ ...formValue, email: "", password: "" });
    }
  };

  if (loading) return <Spinner loading={loading} />;

  if (user) {
    return <Navigate to={location.state ? location.state.path : "/"} />;
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
            required
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formValue.password}
            onChange={handleInput}
            required
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
