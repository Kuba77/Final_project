import React from "react";
import classes from "./Categories.module.scss"
import { Link } from "react-router-dom";


const CategoriesItem = (props) => {
    const {categoryName, item, to} = props
    return(
        <Link className={classes.book_category} to={to}>{categoryName}</Link>
    )
}

export default CategoriesItem;