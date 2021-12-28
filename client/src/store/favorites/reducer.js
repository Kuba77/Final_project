import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addProductToFavorites,
  getWishList,
  deleteProductFromFavorites,
} from "../../services/wishlist";
import {
  successMassage,
  warningMessage,
  errorMessage,
} from "../../components/TosterMessages/TosterMessages";
import { message } from "antd";

const warningMessageRequest = (value) => message.warning(`${value}`);

export const getCustomerWishList = createAsyncThunk(
  "favorites/getCustomerWishList",
  async function (value, { rejectWithValue, dispatch }) {
    try {
      const response = await getWishList(value);
      if (response.status === 200 && response.data != null) {
        return response.data.products;
      }
      if (response.data === null) {
        dispatch(removeFavorites());
      } else {
        throw new Error("Can/t load favorites. Server Eror");
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addOrRemoveProductToFavorite = createAsyncThunk(
  "favorites/addOrRemoveProductToFavorite",
  async function (value, { rejectWithValue, dispatch, getState }) {
    const wishList = getState().favorites;
    try {
      if (wishList.favoriteItems.some((item) => item._id === value)) {
        dispatch(removeCartFromWishList(value));
      } else {
        dispatch(addCartToWishList(value));
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addCartToWishList = createAsyncThunk(
  "favorites/addCartToWishList",
  async function (value, { rejectWithValue, dispatch, getState }) {
    const wishList = getState().favorites;
    try {
      const response = await addProductToFavorites(value);
      if (response.status === 200) {
        return response.data.products;
      } else {
        throw new Error(`Autorize plz . ${response}`);
      }
    } catch (error) {
      warningMessageRequest(error.message);

      return rejectWithValue(error.message);
    }
  }
);
export const removeCartFromWishList = createAsyncThunk(
  "favorites/removeCartFromWishList",
  async function (value, { rejectWithValue }) {
    try {
      const response = await deleteProductFromFavorites(value);
      if (response.status === 200) {
        return response.data.products;
      } else {
        throw new Error("Can/t load favorites. Server Eror");
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
  favoriteItems: [],
  // status: null,
  error: null,
};

const initialState =
  JSON.parse(localStorage.getItem("redux"))?.favorites || defaultState;

const favoriteSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavoriteItems: (state, action) => {
      state.favoriteItems.push(action.payload);
    },
    setFavoriteArray: (state, action) => {
      state.favoriteItems = action.payload;
    },
    deleteFavorites: (state, action) => {
      state.favoriteItems = state.favoriteItems.filter(
        (book) => book._id !== action.payload
      );
    },
    removeFavorites: (state, action) => {
      state.favoriteItems = [];
    },
  },
  extraReducers: {
    [getCustomerWishList.pending]: setLoading,
    [getCustomerWishList.fulfilled]: (state, action) => {
      state.status = "resolve";
      state.error = null;
      state.favoriteItems = action.payload;
    },
    [getCustomerWishList.rejected]: setError,
    [addCartToWishList.pending]: setLoading,
    [addCartToWishList.fulfilled]: (state, action) => {
      state.status = "resolve";
      state.error = null;
      state.favoriteItems = action.payload;
    },
    [addCartToWishList.rejected]: setError,
    [removeCartFromWishList.pending]: setLoading,
    [removeCartFromWishList.fulfilled]: (state, action) => {
      state.status = "resolve";
      state.error = null;
      state.favoriteItems = action.payload;
    },
    [removeCartFromWishList.rejected]: setError,
  },
});

export const { setFavoriteItems, deleteFavorites, removeFavorites } =
  favoriteSlice.actions;
export default favoriteSlice.reducer;
