import { createSlice } from "@reduxjs/toolkit";
export const showCartSlice = createSlice({
  name: "showCart",
  initialState: false,
  reducers: {
    toggleCart: (state, action) => {
      return !state;
    },
  },
});
export const { toggleCart } = showCartSlice.actions;
export default showCartSlice.reducer;
