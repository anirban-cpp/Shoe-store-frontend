import axios from "axios";

export const createOrderApi = async (order) =>
  await axios.post(`http://localhost:1000/api/orders`, order, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const getUserOrdersApi = async (userId) => {
  return await axios.get(`http://localhost:1000/api/orders/user/${userId}`);
}