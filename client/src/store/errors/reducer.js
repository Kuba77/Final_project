import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errorsData: [],
};

const customerSlice = createSlice({
  name: "errors",
  initialState,
  reducers: {
    setErors: (state, action) => {
      state.errorsData = action.payload;
    },
    clearErrors: (state, action) => {
      state.errorsData = [];
    },
  },
});

export const { setErors, clearErrors } = customerSlice.actions;
export default customerSlice.reducer;
