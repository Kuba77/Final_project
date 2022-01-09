import axios from "./htttWraper";
import configData from "../config/config.json";

export const addProductToFavorites = async (value) => {
  try {
    return await axios
      .put(`${configData.WISHLIST}/${value}`)
      .then((response) => {
        return response;
      });
  } catch (error) {
    return error.message;
  }
};
export const deleteProductFromFavorites = async (value) => {
  try {
    return await axios
      .delete(`${configData.WISHLIST}/${value}`)
      .then((response) => {
        return response;
      });
  } catch (error) {
    return error.message;
  }
};

export const getWishList = async () => {
  try {
    return await axios.get(`${configData.WISHLIST}`).then((response) => {
      return response;
    });
  } catch (error) {
    return error.message;
  }
};
