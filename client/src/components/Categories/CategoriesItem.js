import React from "react";
import classes from "./Categories.module.scss";
import Calc from "./Calc";
import classes from "./Categories.module.scss"
import { Link } from "react-router-dom";

const CategoriesItem = (props) => {
    const {categoryName, item, to} = props
    const { name, id } = item;
    return(
      <>
        <Link className={classes.book_category} to={to}>{categoryName}</Link>
        <Link className={classes.action_book} to={`category/${id}`}>
        {name}
      </Link>
      </>
    )
}
 

export default CategoriesItem;
