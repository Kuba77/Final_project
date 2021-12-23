import axios from "./htttWraper";
import configData from "../config/config.json";
import { successOrderNotification } from "../components/Order-page/Order-toasts/Order-toasts";

export async function createNewOrder(values) {
  try {
    return await axios.post(configData.ORDERS_URL, values).then((resp) => {
      successOrderNotification(resp.data.order.orderNo);
      return resp;
    });
  } catch (er) {
    return er.response.data;
  }
}
