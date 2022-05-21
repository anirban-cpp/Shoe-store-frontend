import { FaPhoneAlt } from "react-icons/fa";
import { MdLocationPin, MdMail } from "react-icons/md";

import amex from "./assets/cards/amex.webp";
import discover from "./assets/cards/discover.webp";
import master from "./assets/cards/master.webp";
import paypal from "./assets/cards/paypal.webp";
import visa from "./assets/cards/visa.webp";

export const contacts = [
  {
    id: 1,
    icon: <FaPhoneAlt size={26} />,
    title: "Call us 24x7",
    content: "9804 158 828",
  },
  {
    id: 2,
    icon: <MdLocationPin size={26} />,
    title: "Headquaters",
    content: "Kolkata",
  },
  {
    id: 3,
    icon: <MdMail size={26} />,
    title: "Mail us",
    content: "info@xyz.com",
  },
];

export const cards = [master, visa, paypal, amex, discover];

export const order_status_types = ["confirmed", "delivered", "cancelled"]