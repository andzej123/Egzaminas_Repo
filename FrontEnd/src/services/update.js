import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const updateCategory = async (id, data) => {
    const token = localStorage.getItem("token");
    const response = await axios.patch(`${API_URL}/categories/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };

  export const updateOffer = async (id, data) => {
    const token = localStorage.getItem("token");
    const response = await axios.patch(`${API_URL}/offers/${id}`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };