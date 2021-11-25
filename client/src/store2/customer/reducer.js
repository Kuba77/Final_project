import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCustomer: (state, action) => {
      state = { f: 1 };
    },
  },
});

export const { setCustomer, deleteCustomer } = customerSlice.actions;
export default customerSlice.reducer;
