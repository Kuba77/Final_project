import React, { useEffect, useState, useCallback } from "react";
import CartProduct from "./CartProduct";
import Empty from "../Empty/Empty";
import { itemsInCart } from "../../store/selectors";
import { useSelector, useDispatch } from "react-redux";
import { customerData } from "../../store/selectors";
import {
  rewrite,
  addProductToCart,
  decr,
  removeProductFromCart,
} from "../../store/cart/reducer";
import { addRemoveQuantity } from "../../utils/utils";
import PuffLoader from "react-spinners/PuffLoader";

const CartProductList = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [cart, setCart] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const { status, error } = useSelector((state) => state.cart);

  useEffect(() => {
    setLoading(true);
    setCart(itemsInCart(store));
    setLoading(false);
  }, [store]);

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

  const CustomerCart = cart.map((item, index) => (
    <CartProduct
      item={item}
      key={index}
      deleteProductFromCart={deleteProductFromCart}
      decreaseProduct={decreaseProduct}
      increaseProduct={increaseProduct}
      customer={customerData(store).id}
      localAddRemoveQuantity={localAddRemoveQuantity}
    />
  ));
  const r = cart.length > 0 ? CustomerCart : <Empty />;

  return (
    <div>
      {CustomerCart}
      {cart.length === 0 && <Empty />}
      {/* {r} */}
    </div>
  );
};

export default CartProductList;
