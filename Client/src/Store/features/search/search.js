import { createSlice } from "@reduxjs/toolkit";
export const searchSlice = createSlice({
  name: "searchProduct",
  initialState: { searchValue: "" },
  reducers: {
    updateSearchValue: (state, action) => {
      state.searchValue = action.payload;
      // console.log(state.searchValue);
    },
  },
});
export const { updateSearchValue } = searchSlice.actions;
export default searchSlice.reducer;
