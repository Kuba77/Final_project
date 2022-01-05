import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginCustomer,
  logOrRegisterCustomer,
  registerCustomer,
  getCustomerInfo,
  updateUser,
} from "../../services/user";
import { getcart } from "../cart/reducer";
import { getCustomerWishList } from "../favorites/reducer";
import { message } from "antd";
import { qwe } from "../../utils/utils";

const errorMessageRequest = (value) => message.error(`${value}`);

export const letHimComeIn = createAsyncThunk(
  "customer/letHimComeIn",
  async function (value, { rejectWithValue, dispatch }) {
    try {
      const singIn = await loginCustomer(value);
      if (singIn.id) {
        dispatch(getcart());
        dispatch(getCustomerWishList());
        dispatch(setCustomerInfo());
      } else {
        return rejectWithValue(singIn);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
const setCustomerInfo = createAsyncThunk(
  "customer/getCustomerInfo",
  async function (_, { rejectWithValue, dispatch }) {
    try {
      const customerInfo = await getCustomerInfo();
      console.log("customerInfo", customerInfo);
      if (customerInfo.status === 200 && customerInfo.data.customerNo) {
        return customerInfo.data;
      } else {
        throw new Error("Can/t load user info. Server Eror");
      }
    } catch (error) {
      errorMessageRequest(error.message);
      return rejectWithValue(error.message);
    }
  }
);
export const letHimComeInGoogle = createAsyncThunk(
  "customer/letHimComeInGoogle",
  async function (value, { rejectWithValue, dispatch }) {
    try {
      let customer = await logOrRegisterCustomer(value);
      if (customer.id) {
        dispatch(getcart());
        dispatch(getCustomerWishList());
        dispatch(setCustomerInfo());
      } else {
        return rejectWithValue(customer);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const welcomeToTheNewGuy = createAsyncThunk(
  "customer/welcomeToTheNewGuy",
  async function (value, { rejectWithValue, dispatch }) {
    try {
      let newCustomer = await registerCustomer(value);
      if (newCustomer.data._id) {
        dispatch(
          letHimComeIn({
            loginOrEmail: value.email,
            password: value.password,
          })
        );
      } else {
        return rejectWithValue(newCustomer);
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const updateCustomer = createAsyncThunk(
  "customer/letHimComeIn",
  async function (value, { rejectWithValue, dispatch, getState }) {
    const existCustomer = getState().customer?.customerData?._id;
    if (existCustomer) {
      try {
        const prepValue = qwe(value);
        console.log("prepValue", prepValue);
        const updatedCustomerInfo = await updateUser(prepValue);
        console.log("updatedCustomerInfo", updatedCustomerInfo);
      } catch (error) {
        errorMessageRequest(error.message);
      }
    } else {
      return;
    }
  }
);

const setError = (state, action) => {
  state.status = false;
  state.error = action.payload;
};
const setLoading = (state) => {
  state.status = true;
  state.error = null;
};
const setSucessPayload = (state, action) => {
  state.status = false;
  state.error = null;
  state.customerData = action.payload;
};

const defaultState = {
  customerData: [],
  error: null,
  status: null,
};

const initialState =
  JSON.parse(localStorage.getItem("redux"))?.customer || defaultState;

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    setCustomer: (state, action) => {
      state.customerData = action.payload;
    },
    removeCustomer: (state, action) => {
      state.customerData = [];
    },
  },
  extraReducers: {
    [setCustomerInfo.pending]: setLoading,
    [setCustomerInfo.fulfilled]: setSucessPayload,
    [setCustomerInfo.rejected]: setError,
    [letHimComeInGoogle.pending]: setLoading,
    [letHimComeInGoogle.fulfilled]: setSucessPayload,
    [letHimComeInGoogle.rejected]: setError,
    [welcomeToTheNewGuy.pending]: setLoading,
    [welcomeToTheNewGuy.rejected]: setError,
  },
});

export const { setCustomer, removeCustomer } = customerSlice.actions;
export default customerSlice.reducer;
