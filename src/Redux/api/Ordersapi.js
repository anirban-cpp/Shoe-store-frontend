import { orderaxios } from "../../AxiosInstance/axiosinstance";

export const createOrderApi = async (order) =>
  await orderaxios.post(`/`, order, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const getUserOrdersApi = async (userId) => {
  return await orderaxios.get(`/user/${userId}`);
};

export const getUserFilterOrdersApi = async (payload) =>
  await orderaxios.get(
    `/user/${payload.id}/filtered?order=${payload.order}&status=${payload.status}`
  );

export const changeOrderStatusApi = async (payload) =>
  await orderaxios.put(`/${payload.orderId}/change`, {
    itemId: payload.itemId,
    status: payload.status,
  });
