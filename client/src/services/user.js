import axios, { setAuthToken } from "./htttWraper";
import configData from "../config/config.json";
import jwtDecode from "jwt-decode";

export async function logOrRegisterCustomer(value) {
  try {
    return await axios
      .post(configData.GOOGLE_LOGIN_URL, {
        tokenId: value.tokenId,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setAuthToken(res.data.token);
        const user = jwtDecode(res.data.token);
        return user;
      });
  } catch (e) {
    return e.message;
  }
}
export async function loginCustomer(value) {
  try {
    return await axios
      .post(configData.CUSTOMERS_LOGIN_URL, value)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setAuthToken(res.data.token);
        console.log(res.data.success);
        const user = jwtDecode(res.data.token);
        return user;
      });
  } catch (error) {
    return error.response.data;
  }
}
export async function registerCustomer(value) {
  try {
    return await axios.post(configData.CUSTOMERS_URL, value).then((res) => {
      return res;
    });
  } catch (error) {
    return error.response.data;
  }
}

export function logoutCustomer() {
  try {
    localStorage.removeItem("token");
    setAuthToken(false);
  } catch (error) {
    return error.response.data;
  }
}

export async function updateUser(value) {
  try {
    return await axios.put(configData.CUSTOMERS_URL, value).then((res) => {
      console.log("updateUser", res);
      return res;
    });
  } catch (error) {
    return error.response.data;
  }
}
export async function updateCustomerPassword(value) {
  try {
    return await axios
      .put(configData.CUSTOMERS_PASSWORD_URL, value)
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error.response.data;
  }
}
export async function getCustomerInfo() {
  try {
    return await axios.get(configData.CUSTOMER_URL).then((res) => {
      return res;
    });
  } catch (error) {
    return error.response.data;
  }
}
