import React from "react";
import { useSelector } from "react-redux";
import { customerData } from "../../../store/selectors";
import OrderItem from "./Order-list-item";
import classes from "./order-list-item.module.scss";

const OrderList = () => {
  const store = useSelector((state) => state);
  const customerCartItems = store.cart.products;
  const customerCart = customerCartItems.map((item, index) => {
    return (
      <OrderItem item={item} key={index} customer={customerData(store)._id} />
    );
  });
  return (
    <>
      <div className={classes.order_list__container}>
        <h1>Your choise is:</h1>
        <div className={classes.order_list__wrapper}>{customerCart}</div>
      </div>
    </>
  );
};

export default OrderList;
