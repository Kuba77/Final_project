import axios from "axios";
import { message } from "antd";
import configData from "../../config/config.json";
import {successMassage, warningMessage, errorMessage} from "../../components/TosterMessages/TosterMessages";
import "antd/dist/antd.css";

const warningMessageRequest = (requestMessage) => message.warning(`${requestMessage}`);

const createNewSubscribe = (credentials) => {
  axios
    .post(`${configData.SUBSCRIBERS}`, credentials)
    .then((response) => {
      if (response.status === 200) {
        successMassage()
      } else {
        warningMessage()
      }
    })
    .catch((error) => {
      const requestMessage = error.response.data.message;
      if (requestMessage) {
        warningMessageRequest(requestMessage)
      } else {
        errorMessage()
      }
    });
};

export const getSubscriber = (email) => {
  const result = axios
    .get(`${configData.SUBSCRIBERS}/${email}`)
    .then((data) => data)
    .catch((err) => err.response);
  return result;
};

export default createNewSubscribe;
