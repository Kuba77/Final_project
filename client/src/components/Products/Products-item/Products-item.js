import React from "react";
import classes from "./Products-item.module.scss";

const ProductsItem = ({ products, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className={classes.product__container}>
      {products.map((product, index) => {
        return (
          <div key={index} className={classes.product_item__container}>
            <img src={product.imageUrls[0]} />
            <div className={classes.product_item__raiting}>
              <p>Star</p>
              <p>166 reviews</p>
            </div>
            <h5 className={classes.product_item__genre}>
              {product.genre.join("/")}
            </h5>
            <h4 className={classes.product_item__title}>{product.name}</h4>
            <p className={classes.product_item__author}>{product.author}</p>
            <p className={classes.product_item__price}>
              ${product.currentPrice}
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsItem;
