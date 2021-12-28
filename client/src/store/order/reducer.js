import { createSlice } from "@reduxjs/toolkit";

const newOrder = {
  order: {},
};

const orderSlice = createSlice({
  name: "newOrder",
  newOrder,
  reducers: {
    setNewOrder: (state, action) => {
      state.order = action.payload;
    },
  },
});

export const { setNewOrder } = orderSlice.actions;
export default orderSlice.reducer;
