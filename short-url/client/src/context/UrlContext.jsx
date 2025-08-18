import { createContext, useContext, useState } from "react";
import axios from "axios";
import { axiosInstance } from "../lib/axios.js"
const UrlContext = createContext();

export function UrlContextProvider({ children }) {
  const [response, setResponse] = useState([]);

  const shortUrl = async (originalURL) => {
    try {
      const res = await axiosInstance.post("/save", { originalURL });
      setResponse((prev) => [...prev, res.data.shortUrl]);
    } catch (error) {
      console.log("Error in shortening URL:", error);
    }
  };

  const getAllUrl = async () => {
    try {
      const res = await axiosInstance.get("/all");
      setResponse(res.data.urls);
    } catch (error) {
      console.log("Error in shortening URL:", error);
    }
  }

  return (
    <UrlContext.Provider value={{ response, shortUrl, getAllUrl }}>
      {children}
    </UrlContext.Provider>
  );
}

export const useUrl = () => useContext(UrlContext);