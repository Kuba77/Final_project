import React from "react";
import classes from "./cart.module.scss"

const CartItemHeader = (props) =>{

    const {name} = props;

    return(
        <>
            <p className={classes.block_cart_item}>{name}</p>
        </>
    )
}

export default CartItemHeader;