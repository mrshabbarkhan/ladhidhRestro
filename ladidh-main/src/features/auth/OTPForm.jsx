import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchOtp } from "../redux/userAuth/authSlice";

function OTPForm() {
    const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    otp: "",
    email: "",
  });

  const { otp, email } = formData;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      dispatch(fetchOtp(email))
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          className="block text-sm font-medium text-gray-700 mb-1"
          htmlFor="email"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          value={formData.number}
          onChange={handleChange}
          placeholder="Enter your email"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          required
        />
      </div>

      {/* Password Field */}
      <div className="mb-4">
        <label
          className="block text-sm font-medium text-gray-700 mb-1"
          htmlFor="otp"
        >
          Otp here
        </label>
        <input
          id="otp"
          type="number"
          value={formData.otp}
          onChange={handleChange}
          placeholder="Enter your otp here"
          className="w-full px-4 py-1.5 border border-gray-300 rounded-lg text-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
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
  );
}

export default OTPForm;
