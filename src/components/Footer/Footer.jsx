import React from "react";
import { cards } from "../../Data";

import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      {cards.map((card, i) => (
        <div className="card-image" key={i}>
          <img src={card} alt="" />
        </div>
      ))}
    </div>
  );
};

export default Footer;
