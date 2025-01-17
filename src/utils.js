import axios from "axios";

const url = import.meta.env.VITE_API_URL;

export const getProducts = async () => {
  const response = await axios.get(url + "/products");
  return response;
};

export const getProduct = async (id) => {
  const response = await axios.get(url + "/product/" + id);
  return response;
};

export const getPricelist = async (id) => {
  const response = await axios.get(url + "/pricelist/" + id);
  return response;
};
