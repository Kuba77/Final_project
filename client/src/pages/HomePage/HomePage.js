import React from "react";
import Header from "../../components/Header/Header";
import Main from "../../components/Main/Main";
import Feature from "../../components/Feature/Feature";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer";
import Action from "../../components/Action/Action";
import Promo from "../../components/Promo/Promo";

const HomePage = () => {
  return (
    <>
    <Header />
      <Main />
      {/* добавила блок промо */}
      <Promo /> 
      <Feature />
      <Categories />
      {/* добавила блок акция */}
      <Action timer="22 Dec 2021 22:40:00 GMT+2" />
      <Footer />
    </>
  );
};

export default HomePage;
