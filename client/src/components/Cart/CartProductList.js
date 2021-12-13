import React from "react";
import CartProduct from "./CartProduct";
import { InCart } from "../../store/selectors";
import { useDispatch, useSelector } from "react-redux";

const CartProductList = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();

  console.log(InCart(store));
  return (
    <>
      {InCart(store).map((item, index) => (
        <CartProduct item={item} key={index} />
      ))}
    </>
  );
};

export default CartProductList;
