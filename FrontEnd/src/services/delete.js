import axios from "axios";


const API_URL = import.meta.env.VITE_API_URL;

export const deleteCategoryById = async (id) => {
    const token = localStorage.getItem("token");
    const response = await axios.delete(`${API_URL}/categories/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };

  export const deleteOfferById = async (id) => {
    const token = localStorage.getItem("token");
    const response = await axios.delete(`${API_URL}/offers/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };