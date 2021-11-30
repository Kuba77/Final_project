import React from "react";
import CartProduct from "./CartProduct";

const CartProductList = (props) =>{
    
    return(
        <>
            {/* {props.products && props.products.map((product)  => (  */}
                    <CartProduct
                        // products = {productsIsInCart}
                        // removeProductFromCart = {() => {removeProductFromCart(currentProductId)}}
                        // key={product.id}
                        // {...props}
                    />
                {/* )) */}
            {/* // } */}
            </>
    )
}

export default CartProductList;