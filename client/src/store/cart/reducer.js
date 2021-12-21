import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  products: [],
};

const initialState =
  JSON.parse(localStorage.getItem("redux"))?.cart || defaultState;
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItemInCart: (state, action) => {
      state.products.push(action.payload);
    },
    deleteItemFromCart: (state, action) => {
      state.products = state.products.filter(
        (book) => book._id !== action.payload
      );
    },
    rewrite: (state, action) => {
      state.products = action.payload;
    },
    clearCart: (state) => {
      state.products = state.products = [];
    },
  },
});

export const { setItemInCart, deleteItemFromCart, clearCart, rewrite } =
  cartSlice.actions;
export default cartSlice.reducer;
