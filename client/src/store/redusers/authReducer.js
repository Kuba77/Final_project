import { AUTH_USER } from "../actions/types";
// import isEmpty from "../utils/isEmpty";

const initialState = {
  isAuthenticated: false,
  user: {},
};

function auth(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        isAuthenticated: false,
        user: action.payload,
      };

    default:
      return state;
  }
}
export default auth;
