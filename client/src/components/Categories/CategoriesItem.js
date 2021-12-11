import React from "react";
import classes from "./Categories.module.scss";
import { Link } from "react-router-dom";

const CategoriesItem = (props) => {
  const { name, id, imageUrls } = props.item;
  return (
    <>
      <Link className={classes.book_category} to={`category/${id}`} style={{backgroundImage:`url(${imageUrls})`}}>
          <h3>{name}</h3>
      </Link>
    </>
  );
};

export default CategoriesItem;
