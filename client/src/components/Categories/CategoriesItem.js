import React from "react";
import classes from "./Categories.module.scss";
import { Link } from "react-router-dom";

const CategoriesItem = (props) => {
  const { name, id } = props.item;
  return (
    <>
      <Link className={classes.action_book} to={`category/${id}`}>
        {name}
      </Link>
    </>
  );
};

export default CategoriesItem;
