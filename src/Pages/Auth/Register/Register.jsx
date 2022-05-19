import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "../Auth.css";
import { registerRequest } from "../../../Redux/Actions/UserActions";
import Spinner from "../../../components/Spinner/Spinner";
import Validate from "../../../utils/Validate";
import { toast } from "react-toastify";

const Register = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.user);
  window.scroll(0, 0);
  const [formValue, setFormValue] = useState({
    name: "",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const navigate = useNavigate();

  const handleInput = (e) => {
    let { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validate = Validate(formValue);
    if (validate.valid) {
      dispatch(registerRequest({ ...formValue }));
      setFormValue({
        ...formValue,
        name: "",
        email: "",
        password: "",
        confirmpassword: "",
      });
    } else {
      toast.error(validate.message);
    }
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
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formValue.name}
            onChange={handleInput}
            required
          />
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
            placeholder="password"
            value={formValue.password}
            onChange={handleInput}
            required
          />
          <input
            name="confirmpassword"
            type="password"
            placeholder="Confirm Password"
            value={formValue.confirmpassword}
            onChange={handleInput}
            required
          />
          <button onClick={handleSubmit}>Register</button>
        </form>
        <p className="others" onClick={() => navigate("/login")}>
          Already have an account? Login
        </p>
      </div>
    </div>
  );
};

export default Register;
