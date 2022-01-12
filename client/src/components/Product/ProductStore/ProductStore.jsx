import React from "react";
import PropTypes from "prop-types";

const ProductStore = (props) => {
    const { className, quantity } = props;

    const ProductQuantity = (quantity) => {
        return (
            quantity > 0 ?
                <p className={className}>In stock {quantity}</p> :
                <p className={className}>Sold out</p>
        )
    }

    return (
        <React.Fragment>
            {ProductQuantity(quantity)}
        </React.Fragment>
    )
};

ProductStore.propTypes = {
    className: PropTypes.string,
    quantity: PropTypes.number,
};

export default ProductStore;
