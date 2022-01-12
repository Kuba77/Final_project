import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { customerData } from "../../../store/selectors";
import {
  rewrite,
  addProductToCart,
  decr,
  removeProductFromCart,
} from "../../../store/cart/reducer";
import { addRemoveQuantity } from "../../../utils/utils";
import OrderItem from "./Order-list-item";
import classes from "./order-list-item.module.scss";
const OrderList = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  const { status, error } = useSelector((state) => state.cart);
  const customerCartItems = store.cart.products;
  const cart = store.cart;

  const localAddRemoveQuantity = useCallback(
    (value1, value2) => {
      dispatch(rewrite(addRemoveQuantity(cart, value1._id, value2)));
    },
    [cart, dispatch]
  );
  const increaseProduct = (value) => {
    dispatch(addProductToCart(value));
  };
  const deleteProductFromCart = (value) => {
    dispatch(removeProductFromCart(value));
  };
  const decreaseProduct = (value) => {
    dispatch(decr(value));
  };

  const customerCart = customerCartItems.map((item, index) => {
    return (
      <OrderItem
        item={item}
        key={index}
        deleteProductFromCart={deleteProductFromCart}
        decreaseProduct={decreaseProduct}
        increaseProduct={increaseProduct}
        customer={customerData(store)._id}
        localAddRemoveQuantity={localAddRemoveQuantity}
      />
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
