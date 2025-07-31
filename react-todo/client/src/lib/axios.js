import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development"
    ? "http://localhost:3000/api"
    : "https://your-production-api.com", 
  headers: {
    "Content-Type": "application/json"
  }
});
