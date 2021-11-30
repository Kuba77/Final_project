import React from "react";
import classes from "./cart.module.scss"
import CartItemHeader from "./CartItemHeader";

const CartHeader = () => {


    return(
        <>
            <div className={classes.block_cart}>
                <div className={classes.block_cart_left}>
                    <CartItemHeader 
                            name="Item"
                        />
                </div>
                <div className={classes.block_cart_right}>
                    <CartItemHeader 
                            name="Quantity"
                        />
                    <CartItemHeader 
                            name="Price"
                        />
                    <CartItemHeader 
                            name="Total Price"
                        />
                </div>
            </div>
        </>
    )
}

export default CartHeader;