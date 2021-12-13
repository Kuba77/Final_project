import axios from "./htttWraper";
import configData from "../config/config.json";

export async function createProductComment(newComment) {
  try {
    return await axios
      .post(configData.ALL_COMMENTS_URL, newComment)
      .then((response) => {
        return response.data;
      });
  } catch (error) {
    return error.response.data;
  }
}

export async function deleteProductComment(id) {
  try {
    return await axios
      .delete(configData.CUSTOMER_COMMENT_URL, id)
      .then((response) => {
        return response.data;
      });
  } catch (error) {
    return error.response.data;
  }
}

export async function getAllProductComments() {
  try {
    return await axios.get(configData.PRODUCT_COMMENTS_URL).then((response) => {
      return response.data;
    });
  } catch (error) {
    return error.message;
  }
}