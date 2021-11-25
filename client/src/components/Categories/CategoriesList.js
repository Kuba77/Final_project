import React from "react";
import classes from "./Categories.module.scss"
import Calc from "./Calc"


const CategoriesList = (props) => {
    const {categoryName, item, href} = props
    return(
        <a className={classes.action_book} href={href}>{categoryName}
            <div className={classes.calc_item}>
                <Calc 
                    calc={"calc+"}
                />
                <p className={classes.item}>{item}</p>
            </div>
        </a>
    )
}

export default CategoriesList;