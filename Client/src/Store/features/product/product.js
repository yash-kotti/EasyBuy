import { createSlice, current } from "@reduxjs/toolkit";
import { fetchProducts, searchProducts } from "./productThunks";

const productSlice = createSlice({
  name: "product",
  initialState: {
    productsList: [],
    selectedCategories: [],
    totalPages: 0, // Add totalPages to the state,
    currentPage: 1,
    loading: false,
    error: null,
  },
  reducers: {
    // Add the setSelectedCategories action
    setSelectedCategories: (state, action) => {
      // console.log("Set Selected Categories Action", action);
      if (Array.isArray(action.payload)) {
        state.selectedCategories = action.payload;
      }
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
  },
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
        // state.selectedCategories = action.payload.selectedCategories || []; // Handle selectedCategories
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(searchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.productsList = action.payload.products; // Updated to handle the products array
        state.totalPages = action.payload.totalPages; // Add totalPages to state (if applicable)
        // state.selectedCategories = action.payload.selectedCategories || []; // Handle selectedCategories
      })
      .addCase(searchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload; // Set error message from rejected action
      });
  },
});

// Export the setSelectedCategories action
export const { setSelectedCategories, setCurrentPage } = productSlice.actions;

export default productSlice.reducer;
