import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer";
import favoriteReducer from "./favorites/reducer";
import customerReducer from "./customer/reducer";
import errorsReducer from "./errors/reducer";
import promotionReducer from "./promotion/reducer";

function syncWithLocalStorage({ getState }) {
  return (next) => (action) => {
    const updatedAction = next(action);
    localStorage.setItem("redux", JSON.stringify(getState()));
    return updatedAction;
  };
}

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoriteReducer,
    customer: customerReducer,
    errors: errorsReducer,
    promotion: promotionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(syncWithLocalStorage),
});
