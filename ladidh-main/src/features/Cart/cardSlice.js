import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import cartServices from "./cardService";
import qs from "qs";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    increaseQty: 1,
    decreaseQty : 1,
    totalQty : 1,
    totalPrice: null,
    isLoading: false,
    isSuccuss: false,
    isError: false,
  },
  reducers: {
    incrTotalQty(state, action) {
      state.totalQty = state.totalQty += 1
    },
    decTotalQty(state, action) {
      state.totalQty = state.totalQty -= 1
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllCart.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccuss = false;
        state.isError = false;
      })
      .addCase(fetchAllCart.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccuss = true;
        state.isError = false;
        state.cartItems = action.payload
        state.totalQty = state.cartItems.reduce((a,p)=>a+p.quantity,0)
        
      })
      .addCase(fetchAllCart.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccuss = false;
        state.isError = true;
      });
  },
});


export const fetchAllCart = createAsyncThunk(
  "GET/CART",
  async (_, thunkAPI) => {
    const { userAuth } = thunkAPI.getState(); 
    const token = userAuth.user.token;

    const options = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      return await cartServices.allCartItmes(options); 
    } catch (error) {
      console.log("Error fetching cart items:", error);
      throw error; 
    }
  }
);


export const addToCart = createAsyncThunk(
  "FETCH/CART",
  async (formData, thunkAPI) => {
    const { userAuth } = thunkAPI.getState();
    const token = userAuth.user.token;

    const options = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      return await cartServices.addProductToCart(formData, options);
    } catch (error) {
      console.log("Error adding item to cart :", error);
      throw error; 
    }
  }
);

export const removeCart = createAsyncThunk(
  "REMOVE/CART",
  async (formData, thunkAPI) => {
    const { userAuth } = thunkAPI.getState();
    const token = userAuth.user.token;
    console.log(token)

    const options = {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Bearer ${token}`,
      },
    };

    try {
      return await cartServices.removeFromCart(formData, options);
    } catch (error) {
      console.log("Error remove cart items:", error);
      throw error;
    }
  }
);

export const { incrTotalQty , decTotalQty } = cartSlice.actions;
export default cartSlice.reducer;
