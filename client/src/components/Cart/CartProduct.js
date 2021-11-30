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
                        {/* {product.title} */}
                        title
                    </h3>
                    <p className={classes.product_description}>
                        {/* {product.description} */}
                        description
                    </p>
                </div>
            </div>
            <div className={classes.product_culc_and_price}>
                <div className={classes.product_culc}>

                </div>
                <div className={classes.product_price}>
                    <p>$</p>
                    <p>25</p>
                </div>
                <div className={classes.product_total_price}>
                    <p>$</p>
                    <p>50</p>
                </div>
                <MdRemoveShoppingCart className={classes.product_remove_icon} />
            </div>

        </div>
    )
}

export default CartProduct;