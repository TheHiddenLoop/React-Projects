import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development"
    ? "http://localhost:3000/short" 
    : "https://your-production-api.com",
  withCredentials: false, 
});