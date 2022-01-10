import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAllProducts } from "../../services/products";

export const getPromotionList = createAsyncThunk(
  "promotion/getPromotionList",
  async function (_, { rejectWithValue, dispatch }) {
    // const getCollection = useCallback(async () => {
    //   let promotionArr = [];
    //   const response = await getAllProducts();
    //   response.map((item) => {
    //     if (item.salePrice) {
    //       promotionArr.push(item);
    //     }
    //     return promotionArr;
    //   });
    //   setPromotionData(promotionArr);
    // }, [setPromotionData]);
    try {
      const response = await getAllProducts();
      if (response.status === 200 && response.data !== null) {
        let promotionArray = [];
        response.map((item) => {
          if (item.salePrice) {
            promotionArray.push(item);
          }
          return promotionArray;
        })
        dispatch(setPromotionData(promotionArray));
      }
      if (response.data === null) {
      } else {
        throw new Error("Can/t load promotion products. Server Eror");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};
const setLoading = (state, action) => {
  state.status = "loading";
  state.error = null;
};

const defaultState = {
  promotionTime: false,
  promotionData: [],
  status: null,
  error: null,
};

const initialState =
  JSON.parse(localStorage.getItem("redux"))?.promotion || defaultState;

const promotionSlice = createSlice({
  name: "promotion",
  initialState,

  reducers: {
    setPromotionData: (state, action) => {
      state.promotionTime = true;
      state.promotionData = action.payload
    },

    // setPromotionTime: (state, action) => {
    //   state.promotionTime = action.payload
    // },
    endPromotionData: (state, action) => {
      state.promotionTime = false;
      state.promotionData = []
    },

  },

  extraReducers: {
    [getPromotionList.pending]: setLoading,
    [getPromotionList.fulfilled]: (state, action) => {
      state.status = "resolve";
      state.error = null;
    },
    [getPromotionList.rejected]: setError,
  },
})

export const {
  setPromotionData,
  endPromotionData } = promotionSlice.actions;
export default promotionSlice.reducer;
