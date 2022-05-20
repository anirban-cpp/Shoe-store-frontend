import axios from "axios";

export const createOrderApi = async (order) =>
  await axios.post(`http://localhost:1000/api/orders`, order, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const getUserOrdersApi = async (userId) => {
  return await axios.get(`http://localhost:1000/api/orders/user/${userId}`);
};

export const getUserFilterOrdersApi = async (payload) =>
  await axios.get(
    `http://localhost:1000/api/orders/user/${payload.id}/filtered?order=${payload.order}&status=${payload.status}`
  );

export const changeOrderStatusApi = async (payload) =>
  await axios.put(
    `http://localhost:1000/api/orders/${payload.orderId}/change`,
    {
      itemId: payload.itemId,
      status: payload.status,
    }
  );
