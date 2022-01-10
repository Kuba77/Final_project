import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  promotionTimer: false,
};

const promotionSlice = createSlice({
  name: "promotion",
  initialState,

  reducers: {
    setPromotionTimer: (state, action) => {
      state.promotionTimer = action.payload
    },
  },
})

export const { setPromotionTimer,
  endPromotionTimer,
} = promotionSlice.actions;
export default promotionSlice.reducer;
