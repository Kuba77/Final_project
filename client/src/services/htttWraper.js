import configData from "../config/config.json";
<<<<<<< HEAD

=======
>>>>>>> FP-10-Comments
const axios = require("axios");
axios.defaults.baseURL = configData.BASE_URL;
const JWTToken = sessionStorage.getItem("token");

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
