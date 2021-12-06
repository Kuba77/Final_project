import axios from "./api";
import configData from "../config/config.json";

export async function getAllCategories() {
  try {
    return await axios.get(configData.ALL_CATALOG_URL).then((res) => {
      return res.data;
    });
  } catch (e) {
    return e.message;
  }
}
