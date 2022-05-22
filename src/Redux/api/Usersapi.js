import { authaxios } from "../../AxiosInstance/axiosinstance";

export const RegisterUserApi = async (payload) =>
  await authaxios.post(`/register`, payload);

export const LoginUserApi = async (payload) => {
  return await authaxios.post(`/login`, payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getUserApi = async (payload) => await authaxios.get(`/${payload}`);

export const updateUserApi = async (payload) =>
  await authaxios.put(`/${payload.id}`, payload);
