import React from "react";
import classes from "./cart.module.scss";
import { MdRemoveShoppingCart } from "react-icons/md";
import { calcTotalPriceOneProd } from "../../utils/utils";
import {Link} from "react-router-dom"

const CartProduct = (props) => {
  const { item, deleteProductFromCart, decreaseProduct, increaseProduct } =
    props;

  return (
    <div className={classes.block_product}>
      <div className={classes.product_img_and_text}>
        <Link className={classes.product_img} to={`/product/${item.product.itemNo}`}>
          <img
            className={classes.product_img}
            src={item.product.imageUrls[0]}
            alt="product"
          />
        </Link>
        <div className={classes.product_text}>
          <p className={classes.product_article}>{item.product.categories}</p>
          <h3 className={classes.product_title}>{item.product.name}</h3>
        </div>
      </div>
      <div className={classes.product_culc}>
        <div className={classes.cart_button_prod}>
          <div className={classes.cart_button__counter_prod}>
            <button
              className={classes.cart_button_minus}
              onClick={() => {
                decreaseProduct(item.product._id);
              }}
            >
              -
            </button>

            <span className={classes.cart_counter_span}>
              {item.cartQuantity}
            </span>
            <button
              className={classes.cart_button_plus}
              onClick={() => {
                increaseProduct(item.product._id);
              }}
            >
              +
            </button>
          </div>
        </div>
      </div>
      <div className={classes.product_price}>
        <p>$</p>
        <p>{item.product.currentPrice}</p>
      </div>
      <div className={classes.product_total_price}>
        <p>$</p>
        <p>{calcTotalPriceOneProd(item)}</p>
        <MdRemoveShoppingCart
          className={classes.product_remove_icon}
          onClick={() => {
            deleteProductFromCart(item.product._id);
          }}
        />
      </div>
    </div>
  );
};

export default CartProduct;
