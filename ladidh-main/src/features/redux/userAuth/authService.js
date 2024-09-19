import axios from "axios";

// http://localhost:8014/api/user/login require(email,password)
// http://localhost:8014/api/user/resgister require (name,email,password,number,Addres)

const base_url = "/api/user/";

const getOtp = async (email) => {
  const response = await axios.post("/send-otp", { email });
  return response.data;
};

const register = async (formData) => {
  const response = await axios.post(base_url + "register", formData);
  // localStorage.setItem("user", JSON.stringify(response.data))
  return response.data;
};

const login = async (formData) => {
  const response = await axios.post(base_url + "login", formData);
  return response.data;
};

const authServices = {
  getOtp,
  register,
  login,
};

export default authServices;
