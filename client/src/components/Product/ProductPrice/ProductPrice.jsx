import React from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import classes from "./ProductPrice.module.scss";
import { productPromotion } from "../../../store/selectors";

const ProductPrice = (props) => {
    const { className, blockClassName, salePrice, price } = props;
    const store = useSelector((state) => state);
    const promotion = productPromotion(store)
    
    return (
        <React.Fragment>
            <div className={blockClassName}>
                {salePrice && promotion ? <p className={classes.product_action__price}>&#36; {salePrice}</p> : ""}
                <p className={salePrice && promotion ? classes.product__price : className}>&#36; {price}</p>
            </div>

        </React.Fragment>
    )

};

ProductPrice.propTypes = {
    blockClassName: PropTypes.string,
    className: PropTypes.string,
    price: PropTypes.number,
    salePrice: PropTypes.number,
}

export default ProductPrice;
