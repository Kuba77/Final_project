import React from "react";
import classes from "./Categories.module.scss"
import CategoriesList from "./CategoriesList";

const Categories = () => {


    return(
        <>
            <div className={classes.categories_wrapper}>
                <div className={classes.categories_block}>
                    <h1 className={classes.categories_title}>Categories</h1>
                    <div className={classes.categories_module}>
                        <CategoriesList 
                            categoryName={"Action"}
                            calc={"Calc+"}
                            item={"Item"}
                            href={"#"}
                        />
                        <CategoriesList 
                            categoryName={"Adventure"}
                            calc={"Calc+"}
                            item={"Item"}
                            href={"#"}
                        />
                        <CategoriesList 
                            categoryName={"Comedy"}
                            calc={"Calc+"}
                            item={"Item"}
                            href={"#"}
                        />
                        <CategoriesList 
                            categoryName={"Drama"}
                            calc={"Calc+"}
                            item={"Item"}
                            href={"#"}
                        />
                        <CategoriesList 
                            categoryName={"Romance"}
                            calc={"Calc+"}
                            item={"Item"}
                            href={"#"}
                        />
                        <CategoriesList 
                            categoryName={"Sports"}
                            calc={"Calc+"}
                            item={"Item"}
                            href={"#"}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}


export default Categories;