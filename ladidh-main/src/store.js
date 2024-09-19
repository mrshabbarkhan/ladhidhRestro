import { configureStore } from "@reduxjs/toolkit";
import productDetailsReducer from "./features/Product-list/productDetailSlice";
import favoriteProductReducer from "./features/Favorites/favoriteSlice";
import cartReducer from "./features/Cart/cardSlice";
import searchReducer from "./features/admin/page/searchSlice";
import userAuthReducer from "./features/redux/userAuth/authSlice";
import adminActionReducer from "./features/redux/adminAuth/adminActionSlice";

const store = configureStore({
  reducer: {
    productDetails: productDetailsReducer,
    favoriteProducts: favoriteProductReducer,
    cart: cartReducer,
    search: searchReducer,
    userAuth: userAuthReducer,
    adminDashboard: adminActionReducer,
  },
});

export default store;
