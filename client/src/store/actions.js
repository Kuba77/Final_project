import types from "./types";

export const isAuth = (value) => ({
  type: types.GET_AUTH,
  payload: value,
});
export const setUser = (value) => ({
  type: types.SET_USER,
  payload: value,
});
export const googleUser = (value) => ({
  type: types.SET_GOOGLE_USER,
  payload: value,
});
export const logoutUser = () => ({
  type: types.LOGOUT,
});
export const useError = (value) => ({
  type: types.USERS_ERROR,
  payload: value,
});
