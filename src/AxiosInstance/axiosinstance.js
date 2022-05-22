import axios from "axios";

export const authaxios = axios.create({
  baseURL: "http://localhost:1000/api/auth",
  headers: {
    "Content-Type": "application/json",
  },
});

export const productaxios = axios.create({
  baseURL: "http://localhost:1000/api/products",
});

export const orderaxios = axios.create({
  baseURL: "http://localhost:1000/api/orders",
});
