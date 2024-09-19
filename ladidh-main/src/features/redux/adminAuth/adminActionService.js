import axios from "axios";

const base_url = "/api/admin/";

const getAllUsers = async () => {
  const response = await axios.post(base_url + "users");
  return response.data;
};

const getAllProducts = async () => {
  const response = await axios.get(base_url + "products");
  return response.data;
};

const addProducts = async (formData) => {
  const response = await axios.post(base_url + "products", formData);
  return response.data;
};

const editProducts = async (id,data) => {
  const response = await axios.put(base_url + `products/${id}`, data);
  return response.data;
};

const deleteProducts = async (id) => {
  const response = await axios.delete(base_url + `products/${id}`);
  return response.data;
};

const addBanner = async (data) => {
  const response = await axios.post(base_url + "banner/upload", data);
  return response.data;
};

const deleteBanner = async (id) => {
  const response = await axios.delete(base_url + `banner/${id}`);
  return response.data;
};

const getAllBanners = async () => {
  const response = await axios.get(base_url + "banner");
  return response.data;
};

/// CATEGORY
const addCategory = async (formData) => {
  const response = await axios.post(base_url + "category", formData);
  return response.data;
};

const getAllCategory = async () => {
  const response = await axios.get(base_url + "category");
  return response.data;
};

const deleteCategory = async (id) => {
  const response = await axios.delete(base_url + `category/${id}`);
  return response.data;
};

const editCategory = async (id, data) => {
  const response = await axios.put(base_url + `category/${id}`, data);
  console.log(response.data)
  return response.data;
};

const adminServices = {
  getAllUsers,
  addProducts,
  getAllProducts,
  deleteProducts,
  addBanner,
  getAllBanners,
  deleteBanner,
  addCategory,
  getAllCategory,
  deleteCategory,
  editCategory,
  editProducts,
};

export default adminServices;
