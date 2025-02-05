import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts, searchProducts } from "./productThunks";

const productSlice = createSlice({
  name: "product",
  initialState: {
    productsList: [],
    totalPages: 0, // Add totalPages to the state
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productsList = action.payload.products; // Updated to handle the products array
        state.totalPages = action.payload.totalPages; // Add totalPages to state
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productsList = action.payload.products; // Updated to handle the products array
        state.totalPages = action.payload.totalPages; // Add totalPages to state (if applicable)
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Set error message from rejected action
      });
  },
});

export default productSlice.reducer;
