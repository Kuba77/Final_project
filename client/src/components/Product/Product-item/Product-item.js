import React, { useState, useEffect } from "react";
import classes from "./Product-item.module.scss";
import getProductList from "../../../api/GetProductsList";
import axios from "axios";

const ProductItem = () => {
  const [productsState, setProducts] = useState({
    products: [],
  });

  useEffect(() => {
    getProductList().then((resp) => {
      const productsList = resp.data;
      setProducts({ products: productsList });
    });
  }, [setProducts]);
  const productsListArray = productsState.products;
  console.log(productsListArray);
  return (
    <div className={classes.product__container}>
      {productsListArray.map((product) => {
        return (
          <div key={product.id} className={classes.product_item__container}>
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
