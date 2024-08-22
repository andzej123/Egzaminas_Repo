import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const registerUser = async (data) => {
  await axios.post(`${API_URL}/register`, data);
};

export const loginUser = async (data) => {
    const response = await axios.post(`${API_URL}/login`, data);
    return response.data;
  };

  export const addCategory = async (data) => {
    const token = localStorage.getItem("token");
    await axios.post(`${API_URL}/categories`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  export const addOffer = async (data) => {
    const token = localStorage.getItem("token");
    await axios.post(`${API_URL}/offers`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };

  export const addComment = async (data) => {
    const token = localStorage.getItem("token");
    await axios.post(`${API_URL}/comments`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  };