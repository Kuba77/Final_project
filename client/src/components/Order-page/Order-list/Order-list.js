import React from "react";
import { getOrderFromApi } from "../../../store/order/middleware";

const OrderList = async () => {
  const orderFunc = await getOrderFromApi();
  orderFunc.map((item) => {
    const itemDataName = item.data.products.name;
    return <p>{itemDataName}</p>;
  });
};

export default OrderList;
