import { AUTH, LOGOUT } from "../types";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      console.log(action.data);
      return state;
    default:
      break;
  }
};
export default authReducer;
