// import { isAuth, setUser } from "../store/actions";

import axios, { setAuthToken } from "./Api";

export async function loginCustomer(info) {
  try {
    await axios.post(`customers/login`, info).then((res) => {
      //закинли токен если успешен в сторедж что бы потом его подлаживать под запросы
      sessionStorage.setItem("token", res.data.token);
      setAuthToken(res.data.token);
      console.log("LOGIN RES", res);
    });
    return await axios.get(`customers/customer`).then((res) => {
      console.log("GET RES", res);
    });
  } catch (e) {
    console.log(e, "нет ю");
  }
}

export async function registerCustomer(info) {
  try {
    return await axios.post("customers", info).then((res) => {
      console.log("Reg user", res);
    });
  } catch (e) {
    console.log(e);
  }
}

export async function logOutCustomer() {
  try {
    //закинли токен если успешен в сторедж что бы потом его подлаживать под запросы
    sessionStorage.removeItem("token");
    // isAuth(false);
    // setUser({});
  } catch (e) {
    console.log(e, "нет ю");
  }
}
