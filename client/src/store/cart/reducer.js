<<<<<<< HEAD
import { createSlice } from '@reduxjs/toolkit';

=======
import { createSlice } from "@reduxjs/toolkit";
>>>>>>> MisyatsDenisBranch

const initialState = {
  itemsInCart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setItemInCart: (state, action) => {
      state.itemsInCart.push(action.payload);
    },
    deleteItemFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        (book) => book.id !== action.payload
      );
    },
    clearCart: (state) => {
      state.itemsInCart = state.itemsInCart = [];
    },
  },
});

<<<<<<< HEAD
export const { setItemInCart, deleteItemFromCart, clearCart} = cartSlice.actions;
export const selectCart = state => state.itemsInCart.book
export default cartSlice.reducer;
=======
export const { setItemInCart, deleteItemFromCart, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
>>>>>>> MisyatsDenisBranch
