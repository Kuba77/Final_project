import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  customerData: [],
};

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCustomer: (state, action) => {
      state.customerData = action.payload;
    },
    removeCustomer: (state, action) => {
      state.customerData = [];
    },
  },
});

export const { setCustomer, removeCustomer } = customerSlice.actions;
export default customerSlice.reducer;
