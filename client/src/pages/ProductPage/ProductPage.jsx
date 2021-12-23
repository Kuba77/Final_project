import React from "react";
import Product from "../../components/Product/Product";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const ProductPage = () => {

    return (
        <React.Fragment>
            <Header />
            <Product />
            <Footer />
        </React.Fragment>
    )
};

export default ProductPage;
