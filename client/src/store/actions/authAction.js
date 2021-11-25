import { AUTH_USER, GET_ERRORS } from "./types";
import axios from "../../api/Api";

import jwtDecode from "jwt-decode";

export const signUp = (value) => async (dispatch) => {
  try {
    //получаем токен от сервера в ответ на успешную регистрацию
    const { token } = await axios.post("/customers", value);

    console.log(token);

    //токен декодируем
    const user = jwtDecode(token);
    // сохраняем на локалку сервера
    sessionStorage.setItem("token", token);
    // диспатчим то что имеем из токена
    dispatch({ type: AUTH_USER, payload: user });
  } catch (error) {
    const err = JSON.parse(error.message);
    dispatch({ type: GET_ERRORS, payload: err });
  }
};

// export async function registerCustomer(newCustomer, dispatch) {
//   try {
//     await axios.post("/customers", newCustomer).then((req) => {
//       dispatch(setUser(req.data));
//       console.log(req.data);
//       return req.data;
//     });
//   } catch (err) {
//     console.log(err.response.data);
//   }
// }

// import types from "./types";

// export const isAuth = (value) => ({
//   type: types.GET_AUTH,
//   payload: value,
// });
// export const setUser = (value) => ({
//   type: types.SET_USER,
//   payload: value,
// });
// export const googleUser = (value) => ({
//   type: types.SET_GOOGLE_USER,
//   payload: value,
// });
// export const logoutUser = () => ({
//   type: types.LOGOUT,
// });
// export const useError = (value) => ({
//   type: types.USERS_ERROR,
//   payload: value,
// });
