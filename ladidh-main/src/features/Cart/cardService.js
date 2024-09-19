import axios from "axios";

const base_url = "/api/user/cart";

const addProductToCart = async (formData, options) => {
  const res = await axios.post(base_url, formData, options);
  return res.data;
};

const allCartItmes = async (options) => {
  const res = await axios.get(base_url , options);
  console.log(res.data)
  return res.data;
};

const removeFromCart = async (formData, options) => {
  console.log("from service", formData, options);

  const res = await axios.delete(base_url + "/remove", {
    ...options,
    data: { productId: formData }, // Pass the formData as data in the request body
  });

  return res.data;
};

const cartServices = {
  allCartItmes,
  addProductToCart,
  removeFromCart,
};

export default cartServices;
