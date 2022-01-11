import React, { useEffect, useState, useCallback } from "react";
// import CartProductList from "../../components/Cart/CartProductList";
// import CartHeader from "../../components/Cart/CartHeader";
// import CartSummary from "../../components/Cart/CartSummary";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Basket from "../../components/Basket/Basket";

import { itemsInCart } from "../../store/selectors";
import { useSelector } from "react-redux";
import { calcTotalPrice, calcPromoTotalPrice } from "../../utils/utils";

const CartPage = () => {
  const store = useSelector((state) => state);
  const [totalSum, setTotalSum] = useState(0);
  const [promocode, setPromocode] = useState();
  const [wrongPromocode, setwrongPromocode] = useState("");

  const promoCodes = [
    { name: "Skill", interest: "13" },
    { name: "Box", interest: "50" },
  ];

  const sumaryProdCart = useCallback(() => {
    if (promocode) {
      setTotalSum(
        calcPromoTotalPrice(calcTotalPrice(itemsInCart(store)), promocode)
      );
    } else {
      setTotalSum(calcTotalPrice(itemsInCart(store)));
    }
  }, [promocode, store]);

  const addPromoCode = useCallback((value) => {
    const existsPromoCode = promoCodes.find((el) => el.name === value);
    if (existsPromoCode) {
      setPromocode(existsPromoCode);
    } else {
      setwrongPromocode(value);
    }
  }, []);

  useEffect(() => {
    sumaryProdCart();
  }, [itemsInCart(store), promocode]);

  return (
    <>
      <Header />
      {/* <CartHeader />
      <CartProductList />
      <CartSummary totalSum={totalSum} addPromoCode={addPromoCode} /> */}
      <Basket />
      <Footer />
    </>
  );
};

export default CartPage;
