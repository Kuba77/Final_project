import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  customerData: [],
};

const initialState =
  JSON.parse(localStorage.getItem("redux"))?.customer || defaultState;

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
