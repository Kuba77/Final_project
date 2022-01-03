import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { createNewOrder } from "../../services/order";
import { message } from "antd";
import { deleteCartFromStore } from "../cart/reducer";

const warningMessageRequest = (value) => message.warning(`${value}`);
const sucsecMessageRequest = (value) => message.success(`${value}`);

export const createOrder = createAsyncThunk(
  "newOrder/createOrder",
  async function (value, { rejectWithValue, dispatch, getState }) {
    const existCustomer = getState().customer?.customerData?.id;
    try {
      if (existCustomer) {
        dispatch(createOrderAuthorized(value));
      } else {
        dispatch(createOrderUnauthorized(value));
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const createOrderAuthorized = createAsyncThunk(
  "newOrder/createOrderAuthorized",
  async function (value, { rejectWithValue, dispatch, getState }) {
    const existCustomer = getState().customer?.customerData;
    try {
      const newOrder = await createNewOrder({
        ...value,
        customerId: existCustomer.id,
      });
      if (newOrder.message) {
        throw new Error(` ${newOrder.message}`);
      }
      dispatch(deleteCartFromStore());
      sucsecMessageRequest(
        `вы  ${newOrder.data.order.customerId.login} купили ${newOrder.statusText}`
      );
      return newOrder.data.order;
    } catch (error) {
      warningMessageRequest(error.message);
      return rejectWithValue(error.message);
    }
  }
);
const createOrderUnauthorized = createAsyncThunk(
  "newOrder/createOrderUnauthorized",
  async function (value, { rejectWithValue, dispatch, getState }) {
    const products = getState().cart?.products;
    try {
      const newOrder = await createNewOrder({
        ...value,
        products: products,
      });
      dispatch(deleteCartFromStore());
      if (newOrder.data.message) {
        throw new Error(` ${newOrder.data.message}`);
      }
      sucsecMessageRequest(`вы купили ${newOrder.statusText}`);
      return newOrder.data.order;
    } catch (error) {
      warningMessageRequest(error.message);
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
  orders: [],
  error: null,
};
const initialState =
  JSON.parse(localStorage.getItem("redux"))?.orders || defaultState;

const orderSlice = createSlice({
  name: "newOrder",
  initialState,
  reducers: {
    setNewOrder: (state, action) => {
      state.orders.push(action.payload);
    },
    removeOrders: (state) => {
      state.orders = [];
    },
  },
  extraReducers: {
    [createOrderUnauthorized.pending]: setLoading,
    [createOrderUnauthorized.fulfilled]: (state, action) => {
      state.status = "resolve";
      state.error = null;
      state.orders = action.payload;
    },
    [createOrderUnauthorized.rejected]: setError,
    [createOrderAuthorized.pending]: setLoading,
    [createOrderAuthorized.fulfilled]: (state, action) => {
      state.status = "resolve";
      state.error = null;
      state.orders = action.payload;
    },
    [createOrderAuthorized.rejected]: setError,
  },
});

export const { setNewOrder, removeOrders } = orderSlice.actions;
export default orderSlice.reducer;
