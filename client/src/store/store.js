import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./redusers";

function syncWithLocalStorage({ getState }) {
  return (next) => (action) => {
    const updatedAction = next(action);
    sessionStorage.setItem("redux", JSON.stringify(getState()));
    return updatedAction;
  };
}

const middleware = [thunk];
const initialState = {};

const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

const store = createStore(
  rootReducer,
  initialState,
  compose(applyMiddleware(...middleware, syncWithLocalStorage), devTools)
);

export default store;
