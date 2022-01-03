import React from "react";
import PropTypes from "prop-types";
import classes from "./ProductPrice.module.scss";

const ProductPrice = (props) => {
    const { className, salePrice, price } = props;

    return (
        <React.Fragment>
            <div className={classes.price_block}>
                {salePrice ? <p className={classes.product_action__price}>&#36; {salePrice}</p> : ""}
                <p className={salePrice ? classes.product__price : className}>&#36; {price}</p>
            </div>

        </React.Fragment>
    )

};

ProductPrice.propTypes = {
    className: PropTypes.string,
    price: PropTypes.number,
    salePrice: PropTypes.number,
}

export default ProductPrice;