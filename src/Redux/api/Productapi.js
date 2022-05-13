import axios from "axios";

export const loadProductsApi = async () =>
  await axios.get("http://localhost:1000/api/products/all");

export const loadProductApi = async (productId) =>
  axios.get(`http://localhost:1000/api/products/${productId}`);

export const loadQueriedProductsApi = async (keyword) =>
  axios.get(`http://localhost:1000/api/products/?keyword=${keyword}`);
