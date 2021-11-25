import React from "react";

import ProductItem from "../../components/Product/Product-item/Product-item";
import classes from "./products-list-page.module.scss";

function ProductsList() {
  return (
    <div className={classes.content}>
      <h2>Manga</h2>
      <ProductItem />
    </div>
  );
}

export default ProductsList;
