import React from "react";

import CartProductList from "../../components/Cart/CartProductList";
import CartHeader from "../../components/Cart/CartHeader";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import CartSummary from "../../components/Cart/CartSummary";

const CartPage = () => {

    return(
        <>
            <Header />
            <CartHeader />
            <CartProductList />
            <CartSummary />
            <Footer />
        </>
    )
}

export default CartPage;
