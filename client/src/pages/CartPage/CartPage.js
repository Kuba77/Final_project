import React, { useEffect, useState, useCallback } from "react";
import CartProductList from "../../components/Cart/CartProductList";
import CartHeader from "../../components/Cart/CartHeader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CartSummary from "../../components/Cart/CartSummary";

import { InCart } from "../../store/selectors";
import { useSelector } from "react-redux";
import { calcTotalPrice, calcPromoTotalPrice } from "../../utils/utils";

const CartPage = () => {
  const store = useSelector((state) => state);
  const [totalSum, setTotalSum] = useState("");
  const [promocode, setPromocode] = useState("");
  const [wrongPromocode, setwrongPromocode] = useState("");

  const sumaryProdCart = useCallback(() => {
    if (promocode) {
      setTotalSum(calcPromoTotalPrice(calcTotalPrice(InCart(store))));
    } else {
      setTotalSum(calcTotalPrice(InCart(store)));
    }
  }, [promocode, store]);

  const addPromoCode = useCallback((value) => {
    if (value === "Skill") {
      setPromocode(value);
    } else {
      setwrongPromocode(value);
    }
  }, []);

  useEffect(() => {
    sumaryProdCart();
  }, [InCart(store), promocode]);

  return (
    <>
      <Header />
      <CartHeader />
      <CartProductList />
      <CartSummary totalSum={totalSum} addPromoCode={addPromoCode} />
      <Footer />
    </>
  );
};

export default CartPage;
