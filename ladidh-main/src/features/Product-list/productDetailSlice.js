import { createSlice } from "@reduxjs/toolkit";

const productDetailSlice = createSlice({
    name: "ProductDetails",
    initialState: {
        product: null,
    },
    reducers: {
        addToProductDetails(state, action) {
            state.product = action.payload
        }
    }
})

export default productDetailSlice.reducer
export const {addToProductDetails} = productDetailSlice.actions