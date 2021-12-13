import React, { useCallback, useState, useEffect } from "react";
import CategoriesItem from "./CategoriesItem";
import  getAllCategories from "../../services/catalog";

const CategoriesList = () => {
  const [category, setCategory] = useState([]);
  const getCategories = useCallback(async () => {
    const categories = await getAllCategories();
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
    </>
  );
}

export default CategoriesList;
