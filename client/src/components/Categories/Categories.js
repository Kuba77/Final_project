import React from "react";
import classes from "./Categories.module.scss"

const CategoriesBlock = () => {


    return(
        <>
            <div className={classes.categories_wrapper}>
                <div className={classes.categories_block}>
                    <h1 className={classes.categories_title}>Categories</h1>
                </div>
            </div>
        </>
    )
}


export default CategoriesBlock;