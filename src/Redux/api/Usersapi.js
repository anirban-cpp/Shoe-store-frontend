import axios from "axios";

export const RegisterUserApi = async (payload) =>
  await axios.post("http://localhost:1000/api/auth/register", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });

export const LoginUserApi = async (payload) => {
  return await axios.post("http://localhost:1000/api/auth/login", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const getUserApi = async (payload) =>
  await axios.get(`http://localhost:1000/api/auth/${payload}`);

export const updateUserApi = async (payload) =>
  await axios.put(`http://localhost:1000/api/auth/${payload.id}`, payload);
