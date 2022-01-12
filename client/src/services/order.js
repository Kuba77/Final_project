import axios from "./htttWraper";
import configData from "../config/config.json";
import { message } from "antd";
import "antd/dist/antd.css";

import {
  successOrder,
  errorMessage,
} from "../../src/components/TosterMessages/TosterMessages";

const warningMessageRequest = (requestMessage) =>
  message.warning(`${requestMessage}`);

export async function createNewOrder(values) {
  try {
    return await axios.post(configData.ORDERS_URL, values).then((resp) => {
      successOrder();
      return resp;
    });
  } catch (error) {
    const requestMessage = error.response.data.message;
    if (requestMessage) {
      warningMessageRequest(requestMessage);
    } else {
      errorMessage();
    }
  }
}
