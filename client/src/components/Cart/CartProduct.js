import React from "react";
import classes from "./cart.module.scss"
import {MdRemoveShoppingCart} from "react-icons/md"

const CartProduct = (props) => {
    const {product, removeProductFromCart} = props;




    
    return(
        <div className={classes.block_product}>
            <div className={classes.product_img_and_text}>
                    <img className={classes.product_img} src="#" alt="product" />
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
            {/* <div className={classes.product_culc_and_price}> */}
                <div className={classes.product_culc}>
                    <div className={classes.cart_button_prod}>
                        <div className={classes.cart_button__counter}>
                            <button className={classes.cart_button_minus}>-</button>
                            <span>1</span>
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
                
            {/* </div> */}

        </div>
    )
}

export default CartProduct;