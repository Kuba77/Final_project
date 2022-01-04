import axios from "./htttWraper";
import configData from "../config/config.json";

export async function createProductComment(value) {
  let { product, customer, content } = value;

  const newComment = {
    product: product,
    customer: customer,
    content: content.content,
  };

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

export async function getAllProductComments(value) {
  try {
    return await axios
      .get(`${configData.PRODUCT_COMMENTS_URL}/${value}`)
      .then((response) => {
        return response.data;
      });
  } catch (error) {
    return error.message;
  }
}

export async function deleteProductComment(value) {
  try {
    return await axios
      .delete(`${configData.ALL_COMMENTS_URL}/${value}`)
      .then((response) => {
        return response.data;
      });
  } catch (error) {
    return error.response.data;
  }
}