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
const errorsData = createSelector([bazeErors], (errors) => errors.errorsData);

export const errorloginOrEmail = createSelector(
  [errorsData],
  (errorsData) => errorsData.loginOrEmail
);
