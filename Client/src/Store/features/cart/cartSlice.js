import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalPrice: 0 },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
      // console.log(action.payload["Variant Price"]);
      state.totalPrice += action.payload["Variant Price"];
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;
