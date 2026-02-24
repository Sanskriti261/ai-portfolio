import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-portfolio-bzty.onrender.com",
});

export const sendMessage = async (message: string) => {
  const response = await API.post("/chat", { message });
  return response.data;
};