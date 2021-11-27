import axios from "./api";
import { setAuthToken } from "./api";
import jwtDecode from "jwt-decode";

export async function logOrRegisterCustomer(value) {
  try {
    return await axios
      .post("/logingoogle", {
        tokenId: value.tokenId,
      })
      .then((res) => {
        const user = jwtDecode(res.data.token);
        return user;
      });
  } catch (e) {
    return e.message;
  }
}

export async function registerCustomer(value) {
  try {
    return await axios.post("/customers", value).then((res) => {
      console.log("res", res);
      return res;
    });
  } catch (error) {
    console.log("res", error.response.data);

    return error.response.data;
  }
}

export async function loginCustomer(value) {
  try {
    return await axios.post(`customers/login`, value).then((res) => {
      sessionStorage.setItem("token", res.data.token);
      setAuthToken(res.data.token);
      return jwtDecode(res.data.token);
    });
  } catch (error) {
    return error.response.data;
  }
}
