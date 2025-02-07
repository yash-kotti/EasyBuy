import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export const fetchProducts = createAsyncThunk(
  "/products/fetch",
  async (queryObj) => {
    // console.log("Query object received:", queryObj);

    // If multiple categories are provided, join them with commas
    const categoryParam = Array.isArray(queryObj.category)
      ? queryObj.category.join(",") // Join categories as a comma-separated string
      : queryObj.category;

    const getProductsApiUrl = `${API_URL}api/products?page=${queryObj.page}&category=${categoryParam}`;

    // Fetch the products using axios
    const response = await axios.get(getProductsApiUrl);

    // Return the response data
    return response.data;
  }
);

export const searchProducts = createAsyncThunk(
  "/products/search",
  async (reqObj, { getState }) => {
    // console.log("Received reqObj in thunk: ", reqObj); // Check if reqObj is passed correctly

    // Use the passed reqObj instead of state
    const { searchValue, page, category } = reqObj;

    // Create URLSearchParams to append parameters
    const searchParams = new URLSearchParams();

    // Add parameters to the searchParams
    if (searchValue) searchParams.append("query", searchValue);
    if (page) searchParams.append("page", page);
    if (category) searchParams.append("category", category); // Use the category from reqObj

    // Construct the API URL with searchParams
    const searchProductsApiUrl = `${API_URL}api/products/search?${searchParams.toString()}`;
    // console.log("Generated API URL:", searchProductsApiUrl);

    try {
      // Fetch data from API
      const searchedData = await axios.get(searchProductsApiUrl);
      return searchedData.data;
    } catch (error) {
      console.error("Error fetching search products:", error);
      throw error; // Propagate error for rejection handling
    }
  }
);
