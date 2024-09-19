import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authServices from "./authService";
import toast from "react-hot-toast";

const userExist = JSON.parse(localStorage.getItem("user")) || null;

const authSLice = createSlice({
  name: "auth",
  initialState: {
    user: userExist,
    isLoading: false,
    isError: false,
    isSuccess: false,
    serverOTP: null,
  },
  reducers: {
    logOut: (state) => {
      state.user = null;
      state.isError = false;
      state.isSuccess = false;
      localStorage.removeItem("user");
      toast.success("Logout Successfully");
    },
  },
  extraReducers: (builder) => {
    builder
      // fetchOtp cases
      .addCase(fetchOtp.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(fetchOtp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.serverOTP = action.payload;
        toast.success("Otp send to you email successfully")
      })
      .addCase(fetchOtp.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.serverOTP = null;
      })
      // registerUser cases
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
        toast.success("Register Success")
      })
      .addCase(registerUser.rejected, (state,action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        toast.error(action.payload.error)
      })
      // loginUser cases
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.isSuccess = false;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.user = action.payload;
        localStorage.setItem("user", JSON.stringify(action.payload));
        toast.success("Login Success");
      })
      .addCase(loginUser.rejected, (state,action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        toast.error(action.payload.error);
      });
  },
});

// Async thunks
export const fetchOtp = createAsyncThunk(
  "auth/fetchOtp",
  async (email, thunkAPI) => {
    try {
      return await authServices.getOtp(email);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (formData, thunkAPI) => {
    try {
      return await authServices.register(formData);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (formData, thunkAPI) => {
    try {
      return await authServices.login(formData);
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const { logOut } = authSLice.actions;

export default authSLice.reducer;
