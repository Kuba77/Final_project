import React, { useCallback, useState, useEffect } from "react";
import CategoriesItem from "./CategoriesItem";

import { getAllCategories } from "../../api/catalogApi";
// import { setCategory } from "../../store/category/reducer";
import { useDispatch, useSelector } from "react-redux";

const CategoriesList = () => {
  const [category, setCategory] = useState([]);

  const getCategories = useCallback(async () => {
    const categories = await getAllCategories();
    console.log(categories);
    setCategory(categories);
  }, [setCategory]);

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      {category.map((item) => (
        <CategoriesItem item={item} key={item.id} />
      ))}
      {/* <CategoriesItem
        categoryName={"Action"}
        calc={"Calc+"}
        item={"Item"}
        to={"/books/action"}
        onClick={getCategories}
      />
      <CategoriesItem
        categoryName={"Adventure"}
        calc={"Calc+"}
        item={"Item"}
        to={"/books/adventure"}
      />
      <CategoriesItem
        categoryName={"Comedy"}
        calc={"Calc+"}
        item={"Item"}
        to={"/books/comedy"}
      />
      <CategoriesItem
        categoryName={"Drama"}
        calc={"Calc+"}
        item={"Item"}
        to={"/books/drama"}
      />
      <CategoriesItem
        categoryName={"Romance"}
        calc={"Calc+"}
        item={"Item"}
        to={"/books/romance"}
      />
      <CategoriesItem
        categoryName={"Sports"}
        calc={"Calc+"}
        item={"Item"}
        to={"/books/sports"}
      /> */}
    </>
  );
};

export default CategoriesList;
