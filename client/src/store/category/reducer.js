import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  categoriesData: [],
};

const categoriesSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.categoriesData = action.payload;
    },
  },
});

export const { setCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
