import axios from "./htttWraper";
import configData from "../config/config.json";

export async function createNewOrder(values) {
  try {
    return await axios.post(configData.ORDERS_URL, values).then((resp) => {
      return resp;
    });
  } catch (er) {
    return er.response.data;
  }
}
