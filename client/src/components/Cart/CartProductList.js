import React, { useEffect, useState, useCallback } from "react";
import CartProduct from "./CartProduct";
import { InCart } from "../../store/selectors";
import { useSelector, useDispatch } from "react-redux";
import classes from "../../pages/FavoritesPage/FavoritesPage.module.scss";
import { customerData } from "../../store/selectors";
import { deleteItemFromCart, rewrite } from "../../store/cart/reducer";
import {
  getCustomerCart,
  removeProductFromCart,
  decreaseProductQuantity,
  addProductToCart,
} from "../../services/cart";
import { addItemQuantity, decreaseItemQuantity } from "../../utils/utils";

const CartProductList = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [cart, setCart] = useState([]);

  const getCart = useCallback(async () => {
    try {
      if (customerData(store).id) {
        const customerCart = await getCustomerCart();
        setCart(customerCart.products);
      } else {
        setCart(InCart(store));
      }
    } catch (err) {
      console.log(err);
    }
  }, [store]);

  useEffect(() => {
    getCart();
  });

  useEffect(() => {
    setCart(InCart(store));
  }, [store]);

  const localIncrease = useCallback(
    (_id) => {
      let newarr = addItemQuantity(cart, _id);
      dispatch(rewrite(newarr));
    },
    [cart, dispatch]
  );
  const localDecrease = useCallback(
    (_id) => {
      let newarr = decreaseItemQuantity(cart, _id);
      dispatch(rewrite(newarr));
    },
    [cart, dispatch]
  );

  const localRemoveProd = useCallback(
    (value) => {
      dispatch(deleteItemFromCart(`${value}`));
      setCart(InCart(store));
    },
    [store, dispatch]
  );

  const deleteProductFromCart = useCallback(
    async (value) => {
      try {
        const response = await removeProductFromCart(value);
        dispatch(rewrite(response.products));
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch]
  );

  const increaseProduct = useCallback(
    async (value) => {
      try {
        const response = await addProductToCart(value);
        dispatch(rewrite(response.products));
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch]
  );

  const decreaseProduct = useCallback(
    async (value) => {
      try {
        const response = await decreaseProductQuantity(value);
        dispatch(rewrite(response.products));
      } catch (error) {
        console.log(error);
      }
    },
    [dispatch]
  );

  return (
    <>
      {customerData(store).id ? (
        <>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <CartProduct
                item={item}
                key={index}
                deleteProductFromCart={deleteProductFromCart}
                decreaseProduct={decreaseProduct}
                increaseProduct={increaseProduct}
              />
            ))
          ) : (
            <div className={classes.favorites__noitem}>
              <img
                alt="No items in cart"
                src="https://res.cloudinary.com/dl7xlw7cl/image/upload/v1639408051/sideAssets/SeekPng.com_anime-blush-png_380918_jzwoqn.png"
              />
              <h3>No items in cart</h3>
            </div>
          )}
        </>
      ) : (
        <>
          {cart.length > 0 ? (
            cart.map((item, index) => (
              <CartProduct
                item={item}
                key={index}
                deleteProductFromCart={localRemoveProd}
                increaseProduct={localIncrease}
                decreaseProduct={localDecrease}
              />
            ))
          ) : (
            <div className={classes.favorites__noitem}>
              <img
                alt="No items in cart"
                src="https://res.cloudinary.com/dl7xlw7cl/image/upload/v1639408051/sideAssets/SeekPng.com_anime-blush-png_380918_jzwoqn.png"
              />
              <h3>No items in cart</h3>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default CartProductList;
