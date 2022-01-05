import axios from "../../services/htttWraper";
import configData from "../../config/config.json";

export const getOrderFromApi = async () => {
  const resp = await axios.get(`${configData.ORDERS_URL}`);

  return resp;
};
export const deleteAllProductsFromCartAfterOrder = async () => {
  const resp = await axios.delete(`${configData.ADD_PRODUCT_TO_CART}`);
  return resp;
};
