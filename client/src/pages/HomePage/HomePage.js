import React from "react";
import Main from "../../components/Main/Main";
import Feature from "../../components/Feature/Feature";
import Categories from "../../components/Categories/Categories";
import Promotion from "../../components/Promotion/Promotion";
import Promo from "../../components/Promo/Promo";

const HomePage = () => {
  return (
    <>
      <Main />
      <Promo />
      <Feature />
      <Categories />
      <Promotion />
    </>
  );
};

export default HomePage;
