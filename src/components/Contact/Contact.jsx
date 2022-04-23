import React from "react";
import { contacts } from "../../Data";
import Column from "./Column";

import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact">
      <div className="row">
        {contacts.map((contact) => (
          <Column key={contact.id} {...contact} />
        ))}
      </div>
    </div>
  );
};

export default Contact;
