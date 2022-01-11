import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addProduct,
  decreaseProductQuantity,
  removeProduct,
  getCustomerCart,
  moveCartToDB,
  updateCart,
  deleteCart,
} from "../../services/cart";
import { removeDublikateObj } from "../../utils/utils";
import { message } from "antd";
const errorMessageRequest = (value) => message.error(`${value}`);

export const getcart = createAsyncThunk(
  "cart/getcart",
  async function (_, { rejectWithValue, getState, dispatch }) {
    const elCart = getState().cart;
    try {
      const customerCart = await getCustomerCart();
      if (customerCart === null) {
        dispatch(moveAnonimCartToDb(elCart));
      }
      if (customerCart !== null) {
        dispatch(updateAnonimCartAndCustomerCart(customerCart));
      }
    } catch (error) {
      errorMessageRequest(error.message);
      return rejectWithValue(error.message);
    }
  }
);
const moveAnonimCartToDb = createAsyncThunk(
  "cart/moveAnonimCartToDb",
  async function (value, { rejectWithValue }) {
    try {
      const response = await moveCartToDB(value);
      if (!response._id) {
        throw new Error("Can/t move your cart to db. Server Eror");
      }
      return response.products;
    } catch (error) {
      errorMessageRequest(error.message);
      return rejectWithValue(error.message);
    }
  }
);
const updateAnonimCartAndCustomerCart = createAsyncThunk(
  "cart/updateAnonimCartAndCustomerCart",
  async function (value, { rejectWithValue, getState }) {
    const elCart = getState().cart;

    try {
      let unicArr = removeDublikateObj(value.products.concat(elCart.products));
      const response = await updateCart({ products: unicArr });
      if (!response._id) {
        throw new Error("Can/t update your cart to db. Server Eror");
      }
      return response.products;
    } catch (error) {
      errorMessageRequest(error.message);

      return rejectWithValue(error.message);
    }
  }
);
export const addOrRemoveProductToCart = createAsyncThunk(
  "cart/addOrRemoveProductToCart",
  async function (value, { rejectWithValue, getState, dispatch }) {
    const cartArray = getState().cart;
    try {
      if (cartArray.products.some((item) => item.product._id === value._id)) {
        dispatch(removeProductFromCart(value));
      } else {
        dispatch(addProductToCart(value));
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const addProductToCart = createAsyncThunk(
  "cart/addProductToCart",
  async function (value, { rejectWithValue, getState, dispatch }) {
    const knownCustomer = getState().customer?.customerData?._id;
    try {
      if (knownCustomer) {
        const response = await addProduct(value._id);
        if (!response._id) {
          throw new Error("I can't add an item to cart, try again later.");
        }
        dispatch(rewrite(response.products));
      } else {
        dispatch(
          setItemInCart({ _id: value._id, product: value, cartQuantity: 1 })
        );
      }
    } catch (error) {
      errorMessageRequest(error.message);
      return rejectWithValue(error.message);
    }
  }
);
export const removeProductFromCart = createAsyncThunk(
  "cart/removeProductFromCart",
  async function (value, { rejectWithValue, getState, dispatch }) {
    const knownCustomer = getState().customer?.customerData?._id;
    try {
      if (knownCustomer) {
        const response = await removeProduct(value._id);
        if (!response._id && response.products.length !== 0) {
          throw new Error(
            "I can't remove an item from my cart, try again later."
          );
        }
        dispatch(rewrite(response.products));
      } else {
        dispatch(deleteItemFromCart(value._id));
      }
    } catch (error) {
      errorMessageRequest(error.message);

      return rejectWithValue(error.message);
    }
  }
);
export const decr = createAsyncThunk(
  "cart/decr",
  async function (value, { rejectWithValue }) {
    try {
      const response = await decreaseProductQuantity(value._id);
      if (!response._id) {
        throw new Error("Can/t decrease. Server Eror");
      }
      return response.products;
    } catch (error) {
      errorMessageRequest(error.message);
      return rejectWithValue(error.message);
    }
  }
);
export const deleteCustomerCartDB = createAsyncThunk(
  "cart/deleteCustomerCartDB",
  async function (_, { rejectWithValue, dispatch }) {
    try {
      const response = await deleteCart();
      if (response.status === 200 && response.data.message) {
        dispatch(clearCart());
      } else {
        throw new Error(
          "I can't remove an item from my cart, try again later."
        );
      }
    } catch (error) {
      errorMessageRequest(error.message);
      return rejectWithValue(error.message);
    }
  }
);
const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};
const setLoading = (state, action) => {
  state.status = true;
  state.error = null;
};

const defaultState = {
  products: [],
  status: null,
  error: null,
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
  extraReducers: {
    // [getcart.pending]: setLoading,
    // [getcart.fulfilled]: (state, action) => {
    //   state.status = "resolve";
    //   state.error = null;
    //   state.products = action.payload;
    // },
    // [getcart.rejected]: setError,
    [addProductToCart.pending]: setLoading,
    [addProductToCart.fulfilled]: (state, action) => {
      state.status = false;
      state.error = null;
    },
    [addProductToCart.rejected]: setError,
    [decr.pending]: setLoading,
    [decr.fulfilled]: (state, action) => {
      state.status = "resolve";
      state.error = null;
      state.products = action.payload;
    },
    [decr.rejected]: setError,
    [removeProductFromCart.pending]: setLoading,
    [removeProductFromCart.fulfilled]: (state, action) => {
      state.status = "resolve";
      state.error = null;
    },
    [removeProductFromCart.rejected]: setError,
    [moveAnonimCartToDb.pending]: setLoading,
    [moveAnonimCartToDb.fulfilled]: (state, action) => {
      state.status = "resolve";
      state.error = null;
      state.products = action.payload;
    },
    [updateAnonimCartAndCustomerCart.rejected]: setError,
    [updateAnonimCartAndCustomerCart.fulfilled]: (state, action) => {
      state.status = "resolve";
      state.error = null;
      state.products = action.payload;
    },
    [updateAnonimCartAndCustomerCart.rejected]: setError,
    [updateAnonimCartAndCustomerCart.rejected]: setError,
    [updateAnonimCartAndCustomerCart.fulfilled]: (state, action) => {
      state.status = "resolve";
      state.error = null;
      state.products = action.payload;
    },
    [updateAnonimCartAndCustomerCart.rejected]: setError,
    [deleteCustomerCartDB.rejected]: setError,
    [deleteCustomerCartDB.fulfilled]: (state, action) => {
      state.status = "resolve";
      state.error = null;
    },
    [deleteCustomerCartDB.rejected]: setError,
  },
});

export const { setItemInCart, deleteItemFromCart, clearCart, rewrite } =
  cartSlice.actions;
export default cartSlice.reducer;
