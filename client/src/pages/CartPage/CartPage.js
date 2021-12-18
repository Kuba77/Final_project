import React, { useEffect, useState, useCallback } from "react";
import CartProductList from "../../components/Cart/CartProductList";
import CartHeader from "../../components/Cart/CartHeader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CartSummary from "../../components/Cart/CartSummary";

import { InCart } from "../../store/selectors";
import { useSelector, useDispatch } from "react-redux";
import { calcTotalPrice, calcPromoTotalPrice } from "../../utils/utils";

const CartPage = () => {
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const [totalSum, setTotalSum] = useState("");
  const [promocode, setPromocode] = useState("");
  const [wrongPromocode, setwrongPromocode] = useState("");

  const sumaryProdCart = useCallback(() => {
    if (promocode) {
      setTotalSum(calcPromoTotalPrice(calcTotalPrice(InCart(store))));
    } else {
      setTotalSum(calcTotalPrice(InCart(store)));
    }
  }, [InCart(store), promocode]);

  const addPromoCode = useCallback((value) => {
    if (value == "Skill") {
      setPromocode(value);
      console.log("promocode", promocode);
    } else {
      console.log("wrongPromocode");
      setwrongPromocode(value);
    }
  }, []);

  useEffect(() => {
    console.log("CHENGE InCart(store)");
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
