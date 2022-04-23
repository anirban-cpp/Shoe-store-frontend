import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../Auth.css";

const Login = () => {
  window.scroll(0,0)
  // const location = useLocation();
  // console.log(location);
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
    setFormValue({ ...formValue, email: "", password: "" });
  };

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
          <button>Login</button>
        </form>
        <p className="others" onClick={() => navigate("/register")}>
          Create Account
        </p>
      </div>
    </div>
  );
};

export default Login;
