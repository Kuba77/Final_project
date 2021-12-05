import React from "react";
import classes from "./cart.module.scss"
import {MdRemoveShoppingCart} from "react-icons/md"

const CartProduct = () => {
    return(
        <div className={classes.block_product}>
            <div className={classes.product_img_and_text}>
                <a className={classes.product_img} href="#">
                    <img className={classes.product_img} src="#" alt="product" />
                </a>
                <div className={classes.product_text}>
                    <p className={classes.product_article}>article</p>
                    <h3 className={classes.product_title}>
                        title
                    </h3>
                    <p className={classes.product_description}>
                        description
                    </p>
                </div>
            </div>
                <div className={classes.product_culc}>
                    <div className={classes.cart_button_prod}>
                        <div className={classes.cart_button__counter_prod}>
                            <button className={classes.cart_button_minus}>-</button>
                            <span className={classes.cart_counter_span}>1</span>
                            <button className={classes.cart_button_plus}>+</button>
                        </div>                           
                    </div>
                </div>
                <div className={classes.product_price}>
                    <p>$</p>
                    <p>25</p>
                </div>
                <div className={classes.product_total_price}>
                    <p>$</p>
                    <p>50</p>
                    <MdRemoveShoppingCart className={classes.product_remove_icon} />
                </div>
        </div>
    )
}

export default CartProduct;