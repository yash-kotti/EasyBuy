import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import showCartReducer from "./features/cart/showCart";
import productReducer from "./features/product/product";
import searchProductReducer from "./features/search/search";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    showCart: showCartReducer,
    product: productReducer,
    searchProduct: searchProductReducer,
  },
});
