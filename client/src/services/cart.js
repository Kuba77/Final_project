import axios from "./htttWraper";
import configData from "../config/config.json";

export const addProductToCart = async (value) => {
  try {
    return await axios
      .put(`${configData.ADD_PRODUCT_TO_CART}/${value}`)
      .then((res) => {
        return res.data;
      });
  } catch (e) {
    return e.message;
  }
};
export const decreaseProductQuantity = async (value) => {
  try {
    return await axios
      .delete(`${configData.DECREASE_PRODUCT_QUANTITY}/${value}`)
      .then((res) => {
        return res.data;
      });
  } catch (e) {
    return e.message;
  }
};
export const removeProductFromCart = async (value) => {
  try {
    return await axios
      .delete(`${configData.ADD_PRODUCT_TO_CART}/${value}`)
      .then((res) => {
        return res.data;
      });
  } catch (e) {
    return e.message;
  }
};
export const updateCart = async (value) => {
  try {
    return await axios
      .put(`${configData.ADD_PRODUCT_TO_CART}`, value)
      .then((res) => {
        console.log("Update BD", res);
        return res.data;
      });
  } catch (e) {
    return e.message;
  }
};
export const getCustomerCart = async () => {
  try {
    return await axios.get(`${configData.ADD_PRODUCT_TO_CART}`).then((res) => {
      console.log("From BD", res.data);
      return res.data;
    });
  } catch (e) {
    return e.message;
  }
};
export const moveCartToDB = async (value) => {
  try {
    return await axios
      .post(`${configData.ADD_PRODUCT_TO_CART}`, value)
      .then((res) => {
        console.log("Move Cart to BD", res);
        return res.data;
      });
  } catch (e) {
    return e.message;
  }
};
