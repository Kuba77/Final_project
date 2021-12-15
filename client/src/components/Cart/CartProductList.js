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
import { addItemQuantity } from "../../utils/utils";

const CartProductList = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log("cart chenge");
    dispatch(rewrite(cart));
  }, [cart]);

  const deleteProductFromCart = useCallback(
    async (value) => {
      try {
        const response = await removeProductFromCart(value);
        setCart(response.products);
      } catch (error) {
        console.log(error);
      }
    },
    [setCart]
  );
  const localIncrease = useCallback((_id) => {
    console.log("cart", _id);
    let newarr = addItemQuantity(cart, _id);
    console.log("newarr", newarr);
  }, []);

  const localRemoveProd = useCallback(
    (value) => {
      dispatch(deleteItemFromCart(value));
      setCart(InCart(store));
    },
    [deleteItemFromCart, InCart(store)]
  );

  const increaseProduct = useCallback(
    async (value) => {
      try {
        const response = await addProductToCart(value);
        setCart(response.products);
      } catch (error) {
        console.log(error);
      }
    },
    [setCart]
  );

  const decreaseProduct = useCallback(
    async (value) => {
      try {
        const response = await decreaseProductQuantity(value);
        setCart(response.products);
      } catch (error) {
        console.log(error);
      }
    },
    [setCart]
  );

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
  }, [customerData(store).id, InCart(store)]);

  useEffect(() => {
    getCart();
  }, []);

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
              <img src="https://res.cloudinary.com/dl7xlw7cl/image/upload/v1639408051/sideAssets/SeekPng.com_anime-blush-png_380918_jzwoqn.png" />
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
              />
            ))
          ) : (
            <div className={classes.favorites__noitem}>
              <img src="https://res.cloudinary.com/dl7xlw7cl/image/upload/v1639408051/sideAssets/SeekPng.com_anime-blush-png_380918_jzwoqn.png" />
              <h3>No items in cart</h3>
            </div>
          )}
        </>
      )}
    </>
  );
};

export default CartProductList;
