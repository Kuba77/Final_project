import configData from "../config/config.json";
const axios = require("axios");
axios.defaults.baseURL = configData.REACT_APP_API_URL;
// axios.defaults.baseURL = configData.BASE_URL;
const JWTToken = localStorage.getItem("token");

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

if (JWTToken) {
  setAuthToken(JWTToken);
}
export default axios;
