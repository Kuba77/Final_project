import React from "react";
import ProductPrice from "../ProductPrice/ProductPrice";
import ProductStore from "../ProductStore/ProductStore";
import classes from "./ProductPriceBlock.module.scss";

const ProductPriceBlock = (props) => {
    let { product } = props

    return (
        <React.Fragment>

                    <div className={classes.price_block}>
                        <ProductPrice className={classes.product_info__price} price={product.currentPrice} />
                        <ProductStore className={classes.product_info__store} store={product.quantity}/>
                    </div>

        </React.Fragment>
    )
}

export default ProductPriceBlock;