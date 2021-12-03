import configData from "../config/config.json";
const axios = require("axios");

axios.defaults.baseURL = configData.BASE_URL;

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export default axios;
