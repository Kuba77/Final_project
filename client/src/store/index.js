import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer";
import favoriteReducer from "./favorites/reducer";
import customerReducer from "./customer/reducer";
import errorsReducer from "./errors/reducer";

function syncWithLocalStorage({ getState }) {
  return (next) => (action) => {
    const updatedAction = next(action);
    localStorage.setItem("redux", JSON.stringify(getState()));
    return updatedAction;
  };
}

export const store = configureStore({
  //собираем обзий стор
  reducer: {
    cart: cartReducer,
    favorites: favoriteReducer,
    //кастомер инишеал стор для юзера
    //кастомер редюсер в нем созадем масив и в него пушим
    customer: customerReducer,
    errors: errorsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(syncWithLocalStorage),
});
