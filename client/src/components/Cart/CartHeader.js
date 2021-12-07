import React from "react";
import classes from "./cart.module.scss"
import CartItemHeader from "./CartItemHeader";

const CartHeader = () => {


    return(
        <>
            <div className={classes.block_cart}>
                    <CartItemHeader 
                            name="Item"
                        />
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
        </>
    )
}

export default CartHeader;