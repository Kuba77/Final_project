import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginCustomer,
  logOrRegisterCustomer,
  registerCustomer,
} from "../../services/user";
import { getcart } from "../cart/reducer";
import { getCustomerWishList } from "../favorites/reducer";

export const letHimComeIn = createAsyncThunk(
  "customer/letHimComeIn",
  async function (value, { rejectWithValue, dispatch }) {
    try {
      let customer = await loginCustomer(value);
      if (customer.id) {
        dispatch(getcart());
        // dispatch(getCustomerWishList());
        return customer;
      } else {
        return rejectWithValue(customer);
      }
    } catch (error) {
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
        return customer;
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

const setError = (state, action) => {
  state.status = "rejected";
  state.error = action.payload;
};
const setLoading = (state, action) => {
  state.status = "loading";
  state.error = null;
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
    [letHimComeIn.pending]: setLoading,
    [letHimComeIn.fulfilled]: (state, action) => {
      state.status = "resolve";
      state.error = null;
      state.customerData = action.payload;
    },
    [letHimComeIn.rejected]: setError,
    [letHimComeInGoogle.pending]: setLoading,
    [letHimComeInGoogle.fulfilled]: (state, action) => {
      state.status = "resolve";
      state.error = null;
      state.customerData = action.payload;
    },
    [letHimComeInGoogle.rejected]: setError,
    [welcomeToTheNewGuy.pending]: setLoading,
    [welcomeToTheNewGuy.rejected]: setError,
  },
});

export const { setCustomer, removeCustomer } = customerSlice.actions;
export default customerSlice.reducer;
