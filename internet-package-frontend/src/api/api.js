import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const getPackages = async () => {
  const response = await axios.get(`${API_BASE_URL}/packages`);
  return response.data;
};

export const createTransaction = async (data) => {
  const response = await axios.post(`${API_BASE_URL}/transactions`, data);
  return response.data;
};
