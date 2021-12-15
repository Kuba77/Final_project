import { createSlice } from '@reduxjs/toolkit'

const defaultState = {
  favoriteItems: []
}

const initialState = JSON.parse(localStorage.getItem('redux')).favorites|| defaultState

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavoriteItems: (state, action) => {
      state.favoriteItems.push(action.payload)
    },
    deleteFavorites: (state, action) => {
      state.favoriteItems = state.favoriteItems.filter(book => book.itemNo !== action.payload)
    },
  }
});

export const { setFavoriteItems, deleteFavorites } = favoriteSlice.actions;
export default favoriteSlice.reducer;