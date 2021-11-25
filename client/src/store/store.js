import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

function syncWithLocalStorage({ getState }) {
  return (next) => (action) => {
    const updatedAction = next(action);
    sessionStorage.setItem("redux", JSON.stringify(getState()));
    return updatedAction;
  };
}
const devTools = window.__REDUX_DEVTOOLS_EXTENSION__
  ? window.__REDUX_DEVTOOLS_EXTENSION__()
  : (f) => f;

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk, syncWithLocalStorage), devTools)
);

export default store;
