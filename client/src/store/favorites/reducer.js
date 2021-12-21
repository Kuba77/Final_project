import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  favoriteItems: [],
};

const initialState = JSON.parse(localStorage.getItem('redux'))?.favorites || defaultState

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavoriteItems: (state, action) => {
      state.favoriteItems.push(action.payload);
    },
    deleteFavorites: (state, action) => {
      state.favoriteItems = state.favoriteItems.filter(
        (book) => book.itemNo !== action.payload
      );
    },
    removeFavorites: (state, action) => {
      state.favoriteItems = [];
    },
  },
});

export const { setFavoriteItems, deleteFavorites, removeFavorites } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
