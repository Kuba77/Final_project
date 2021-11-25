const axios = require("axios");

axios.defaults.baseURL = "http://localhost:3000/api";

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

// подлаживаем токены под каждый запрос из стореджа

export default axios;
