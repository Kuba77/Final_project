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
        return res.data;
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
export const moveCartToDB = async (value) => {
  try {
    return await axios
      .post(`${configData.ADD_PRODUCT_TO_CART}`, value)
      .then((res) => {
        return res.data;
      });
  } catch (e) {
    return e.message;
  }
};

export const addProduct = async (value) => {
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

export const removeProduct = async (value) => {
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
