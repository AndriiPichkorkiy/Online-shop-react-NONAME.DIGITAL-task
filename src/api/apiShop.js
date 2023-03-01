import axios from "axios";

const instance = axios.create({
  baseURL: "https://fakestoreapi.com/",
});

export const apiShop = {
  getProducts: async function (limit = 20) {
    const URL = "/products?limit=" + limit;
    const response = await instance.get(URL);
    return response.data;
  },
  getProductsByCategory: async function (category) {
    const URL = "/products/category/" + category;
    const response = await instance.get(URL);
    return response.data;
  },
  getProductById: async function (id) {
    const URL = "/products/" + id;
    const response = await instance.get(URL);
    return response.data;
  },
  getCategories: async function () {
    const URL = "/products/categories";
    const response = await instance.get(URL);
    return response.data;
  },
};
