import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const logout = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${API_URL}/logout`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getCategoryById = async (id) => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${API_URL}/categories/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getAllCategories = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${API_URL}/categories`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getAllOffers = async () => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${API_URL}/offers`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getOfferById = async (id) => {
  const token = localStorage.getItem("token");
  const response = await axios.get(`${API_URL}/offers/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const getCommentsByOfferkId = async (id) => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/comments/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };


  export const getFilteredOffersByCategory = async (id) => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${API_URL}/offers/searchcategory?id=${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };
