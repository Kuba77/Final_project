import React from "react";
import classes from "./Product-item.module.scss";

const ProductItem = ({ products, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div className={classes.product__container}>
      {products.map((product, index) => {
        return (
          <div key={index} className={classes.product_item__container}>
            <img src={product.img1} />
            <div className={classes.product_item__raiting}>
              <p>Star</p>
              <p>166 reviews</p>
            </div>
            <h5 className={classes.product_item__genre}>{product.genre[0]}</h5>
            <h4 className={classes.product_item__title}>{product.title}</h4>
            <p className={classes.product_item__author}>{product.author}</p>
            <p className={classes.product_item__price}>${product.price}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ProductItem;
