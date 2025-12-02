import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development"
    ? "https://alumni-connect-obs9.onrender.com/api"
    : "/api",
  withCredentials: true,
});
