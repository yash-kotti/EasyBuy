import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import showCartReducer from "./features/cart/showCart";
export const store = configureStore({
  reducer: {
    cart: cartReducer,
    showCart: showCartReducer,
  },
});
