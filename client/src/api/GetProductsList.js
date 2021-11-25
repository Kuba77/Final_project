import React, { useEffect, useState } from "react";
import axios from "axios";

const getProductList = () => {
  return axios.get("./products.json");
};

export default getProductList;
