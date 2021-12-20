import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  itemsInCart: [],
};

const initialState = JSON.parse(localStorage.getItem('redux'))?.cart || defaultState

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItemInCart: (state, action) => {
      state.itemsInCart.push(action.payload);
    },
    deleteItemFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        (book) => book.itemNo !== action.payload
      );
    },
    clearCart: (state) => {
      state.itemsInCart = state.itemsInCart = [];
    },
  },
});

export const { setItemInCart, deleteItemFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
