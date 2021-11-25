import React from "react";

import CategoriesItem from "./CategoriesItem";


const CategoriesList = () => {
    return(
        <>
            <CategoriesItem 
                categoryName={"Action"}
                calc={"Calc+"}
                item={"Item"}
                to={"/books/action"}
            />
            <CategoriesItem 
                categoryName={"Adventure"}
                calc={"Calc+"}
                item={"Item"}
                to={"/books/adventure"}
            />
            <CategoriesItem 
                categoryName={"Comedy"}
                calc={"Calc+"}
                item={"Item"}
                to={"/books/comedy"}
            />
            <CategoriesItem 
                categoryName={"Drama"}
                calc={"Calc+"}
                item={"Item"}
                to={"/books/drama"}
            />
            <CategoriesItem 
                categoryName={"Romance"}
                calc={"Calc+"}
                item={"Item"}
                to={"/books/romance"}
            />
            <CategoriesItem 
                categoryName={"Sports"}
                calc={"Calc+"}
                item={"Item"}
                to={"/books/sports"}
            />
        </>                
    )
}

export default CategoriesList;