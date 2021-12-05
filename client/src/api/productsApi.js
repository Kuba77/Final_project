import axios from "./api";
import configData from "../config/config.json";

export async function getAllProducts() {
  try {
    return await axios.get(configData.ALL_PRODUCTS_URL).then((res) => {
      return res.data;
    });
  } catch (e) {
    return e.message;
  }
}

export async function getSelectedProduct(value) {
  try {
    return await axios
      .get(`${configData.ALL_PRODUCTS_URL}/${value}`)
      .then((res) => {
        return res.data;
      });
  } catch (e) {
    return e.message;
  }
}
export async function getFilteredProductByCategory(value) {
  try {
    return await axios
      .get(`${configData.FILTERED_PRODUCT_URL}categories=${value}`)
      .then((res) => {
        return res.data;
      });
  } catch (e) {
    return e.message;
  }
}


export async function getSearchProduct(value) {
  try {
    return await axios
      .post(configData.SERCH_PRODUCT_URL, { query: value })
      .then((res) => {
        return res.data;
      });
  } catch (e) {
    return e.message;
  }
}