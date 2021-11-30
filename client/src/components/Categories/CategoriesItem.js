import React from "react";
import classes from "./Categories.module.scss"
import Calc from "./Calc"
import { Link } from "react-router-dom";


const CategoriesItem = (props) => {
    const {categoryName, item, to} = props
    return(
        <Link className={classes.action_book} to={to}>{categoryName}
            <div className={classes.calc_item}>
                <Calc 
                    calc={"calc+"}
                />
                <p className={classes.item}>{item}</p>
            </div>
        </Link>
    )
}

export default CategoriesItem;