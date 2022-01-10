import axios from 'axios';
import configData from "../../config/config.json";

export const fetchData = async query => {
  const url = `${configData.SUBSCRIBERS}`;

  return await axios.post(url);
};

fetchData('react');