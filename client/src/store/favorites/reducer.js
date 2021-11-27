import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavoriteItems: (state, action) => {
      state.favoriteItems.push(action.payload)
    },
    deleteFavorites: (state, action) => {
      state.favoriteItems = state.favoriteItems.filter(book => book.id !== action.payload)
    },
  }
});

export const { setFavoriteItems, deleteFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;