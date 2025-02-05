import { createSlice } from "@reduxjs/toolkit";
export const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalPrice: 0 },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.handle === action.payload.handle
      );
      existingItem
        ? existingItem.quantity++
        : state.items.push({ ...action.payload, quantity: 1 });
      state.totalPrice += action.payload.variantPrice;
    },

    removeItem: (state, action) => {
      const existingItem = state.items.find(
        (item) => item.handle === action.payload.handle
      );
      if (!existingItem) return;

      existingItem.quantity > 1
        ? existingItem.quantity--
        : (state.items = state.items.filter(
            (item) => item.handle !== action.payload.handle
          ));

      state.totalPrice -= action.payload.variantPrice;
    },
    removeAllItems: (state, action) => {
      console.log("removed");
      state.items = [];
    },
  },
});

export const { addItem, removeItem, removeAllItems } = cartSlice.actions;
export default cartSlice.reducer;
