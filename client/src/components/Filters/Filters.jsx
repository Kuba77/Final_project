import React, { useCallback, useEffect, useState } from "react";
import СheckboxFilter from "./checkboxFilter/СheckboxFilter";
import { getAllCategories } from "../../api/catalogApi";

function Filters(props) {
  const [category, setCategory] = useState([]);
  const getCategories = useCallback(async () => {
    const categories = await getAllCategories();
    setCategory(categories);
  }, [setCategory]);

  useEffect(() => {
    console.log("filters applied", category);
    getCategories();
  }, []);
  return (
    <div>
      <h1
        onClick={() => {
          console.log("catArray", category);
        }}
      >
        FILTER
      </h1>
      <>
        {category.length > 0 &&
          category.map((item) => (
            <СheckboxFilter item={item} key={item.id} onClick={props.onClick} />
          ))}
      </>
    </div>
  );
}

export default Filters;
