import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalPrice: 0 },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.Handle === action.payload.Handle
      );
      existingItem
        ? existingItem.quantity++
        : state.items.push({ ...action.payload, quantity: 1 });
      state.totalPrice += action.payload["Variant Price"];
    },

    removeItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.Handle === action.payload.Handle
      );
      if (!existingItem) return;

      existingItem.quantity > 1
        ? existingItem.quantity--
        : (state.items = state.items.filter(
            (item) => item.Handle !== action.payload.Handle
          ));

      state.totalPrice -= action.payload["Variant Price"];
    },
    removeAllItems: (state, action) => {
      console.log("removed");
      state.items = [];
    },
  },
});

export const { addItem, removeItem, removeAllItems } = cartSlice.actions;
export default cartSlice.reducer;
