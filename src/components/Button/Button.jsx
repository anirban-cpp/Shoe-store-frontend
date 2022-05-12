import React from "react";

import './Button.css';

const Button = ({count, increment, decrement}) => {
    return (
    <div className="cart-button">
      <div onClick={decrement}>
        <p>-</p>
      </div>
      <p>{count}</p>
      <div onClick={increment}>
        <p>+</p>
      </div>
    </div>
  );
};

export default Button;
