import axios from "./htttWraper";
import configData from "../config/config.json";

export const addProductToCart = async (value) => {
  try {
    return await axios
      .put(`${configData.ADD_PRODUCT_TO_CART}/${value}`)
      .then((res) => {
        console.log("Added Prod", res);
      });
  } catch (e) {
    return e.message;
  }
};
export const decreaseProductQuantity = async (value) => {
  try {
    return await axios
      .put(`${configData.ADD_PRODUCT_TO_CART}/${value}`)
      .then((res) => {
        console.log("Deleted", res);
      });
  } catch (e) {
    return e.message;
  }
};
export const getCustomerCart = async () => {
  try {
    return await axios.get(`${configData.ADD_PRODUCT_TO_CART}`).then((res) => {
      return res.data;
    });
  } catch (e) {
    return e.message;
  }
};
