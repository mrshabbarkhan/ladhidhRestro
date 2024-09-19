import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchTerm: "",
  debouncedTerm: "",
  searchLocation: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchLocation: (state, action) => {
      console.log(action.payload)
      state.searchLocation = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setDebouncedTerm: (state, action) => {
      state.debouncedTerm = action.payload;
    },
  },
});

export const { setSearchTerm, setDebouncedTerm, setSearchLocation } =
  searchSlice.actions;
export default searchSlice.reducer;
