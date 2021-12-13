import React from "react";
import classes from "./cart.module.scss";
import { MdRemoveShoppingCart } from "react-icons/md";

const CartProduct = (props) => {
  const { cartQuantity, product } = props.item;
  return (
    <div className={classes.block_product}>
      <div className={classes.product_img_and_text}>
        <a className={classes.product_img} href="#">
          <img
            className={classes.product_img}
            src={product.imageUrls[0]}
            alt="product"
          />
        </a>
        <div className={classes.product_text}>
          <p className={classes.product_article}>{product.categories}</p>
          <h3 className={classes.product_title}>{product.name}</h3>
          {/* <p className={classes.product_description}>{product.description}</p> */}
        </div>
      </div>
      <div className={classes.product_culc}>
        <div className={classes.cart_button_prod}>
          <div className={classes.cart_button__counter_prod}>
            <button className={classes.cart_button_minus}>-</button>
            <span className={classes.cart_counter_span}>{cartQuantity}</span>
            <button className={classes.cart_button_plus}>+</button>
          </div>
        </div>
      </div>
      <div className={classes.product_price}>
        <p>$</p>
        <p>{product.currentPrice}</p>
      </div>
      <div className={classes.product_total_price}>
        <p>$</p>
        <p>50</p>
        <MdRemoveShoppingCart className={classes.product_remove_icon} />
      </div>
    </div>
  );
};

export default CartProduct;
