import { createSelector } from "reselect";

const bazeUser = (state) => state.customer;

export const customerData = createSelector(
  [bazeUser],
  (customer) => customer.customerData
);
export const customerName = createSelector(
  [customerData],
  (customerData) => customerData.firstName
);

const bazeErors = (state) => state.errors;
export const errorsData = createSelector(
  [bazeErors],
  (errors) => errors.errorsData
);

export const errorloginOrEmail = createSelector(
  [errorsData],
  (errorsData) => errorsData.loginOrEmail
);

export const errorMessage = createSelector(
  [errorsData],
  (errorsData) => errorsData
);

export const stateCart = (state) => state.cart;
export const itemsInCart = createSelector([stateCart], (cart) => cart.products);

const stateFavorites = (state) => state.favorites;
export const itemsInFavorite = createSelector(
  [stateFavorites],
  (favorites) => favorites.favoriteItems
);
