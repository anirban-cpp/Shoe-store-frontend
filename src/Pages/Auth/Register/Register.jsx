import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "../Auth.css";

const Register = () => {
  window.scroll(0,0)
  const location = useLocation();
  // console.log(location);
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
    console.log(formValue);
    setFormValue({
      ...formValue,
      name: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
  };

  return (
    <div className="auth">
      <div className="auth-container">
        <form onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            pattern="^[a-zA-Z ]+$"
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
            pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$"
            onChange={handleInput}
            required
          />
          <input
            name="confirmpassword"
            type="password"
            placeholder="Confirm Password"
            value={formValue.confirmpassword}
            pattern={formValue.password}
            onChange={handleInput}
            required
          />
          <button>Register</button>
        </form>
        <p className="others" onClick={() => navigate("/login")}>
          Already have an account? Login
        </p>
      </div>
    </div>
  );
};

export default Register;
