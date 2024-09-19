import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../redux/userAuth/authSlice";
import { useNavigate } from "react-router-dom";
import OTPForm from "./OTPForm";

const LoginForm = ({ setRegister }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [showOTP, setShowOTP] = useState(false);

  const { isSuccess } = useSelector((state) => state.userAuth);
  useEffect(() => {
    if (isSuccess) {
      return navigate("/");
    }
  }, [isSuccess]);

  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData));
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        Login
      </h2>

      {showOTP ? (
        <OTPForm />
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              className="block text-sm font-medium text-gray-700 mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              className="w-full px-4 py-1.5 border border-gray-300 rounded-lg text-gray-700 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition duration-300 font-semibold"
          >
            Login
          </button>
        </form>
      )}

      <p onClick={()=>setShowOTP(!showOTP)} className="text-blue-700 underline text-sm my-2 float-end">
        {showOTP ? "Login with email" : "Login with otp"}
      </p>

      {/* Toggle between forms */}
      <p
        onClick={() => setRegister(true)}
        className="hover:underline mt-10 text-center text-sm text-gray-600"
      >
        Don't have an account?
        <button
          type="button"
          className="text-indigo-600 hover:text-indigo-800 font-medium transition"
        >
          sign up
        </button>
      </p>
    </>
  );
};

export default LoginForm;
