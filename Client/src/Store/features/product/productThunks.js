import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

export const fetchProducts = createAsyncThunk(
  "/products/fetch",
  async (queryObj) => {
    console.log(queryObj);
    const getProductsApiUrl = `${API_URL}api/products?page=${queryObj.page}`;
    // if(queryObj.category!=)
    const response = await axios.get(getProductsApiUrl);
    return response.data;
  }
);

export const searchProducts = createAsyncThunk(
  "/products/search",
  async (queryObj) => {
    const searchProductsApiUrl = `${API_URL}api/products/search?query=${queryObj.searchValue}&page=${queryObj.page}`;
    const searchedData = await axios.get(searchProductsApiUrl);
    return searchedData.data;
  }
);
