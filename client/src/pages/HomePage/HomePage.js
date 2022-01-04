import React from "react";
import Main from "../../components/Main/Main";
import Feature from "../../components/Feature/Feature";
import Categories from "../../components/Categories/Categories";
import Action from "../../components/Action/Action";

const HomePage = () => {
  return (
    <>
      <Main />
      <Feature />
      <Categories />
      <Action timer="10 Jan 2022 22:40:00 GMT+2" />
    </>
  );
};

export default HomePage;
