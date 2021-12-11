import axios from "./htttWraper";
import configData from "../config/config.json";

export async function createComment(newComment) {
  try {
    return await axios.post(configData.ALL_COMMENTS_URL, newComment).then((res) => {
      return res;
    });
  } catch (error) {
    return error.response.data;
  }
}

export async function updateComment(comment) {
  try {
    return await axios.put(configData.CUSTOMER_COMMENT_URL, comment).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error.response.data;
  }
}

export async function deleteComment(id) {
  try {
    return await axios
      .delete(configData.CUSTOMER_COMMENT_URL, id)
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    return error.response.data;
  }
}

export async function getAllProductComments() {
  try {
    return await axios.get(configData.PRODUCT_COMMENTS_URL).then((res) => {
      return res.data;
    });
  } catch (error) {
    return error.message;
  }
}