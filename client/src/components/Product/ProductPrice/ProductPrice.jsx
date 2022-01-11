import React from "react";
import PropTypes from "prop-types";

const ProductPrice = (props) => {
    const { className, price } = props;

    return (
        <React.Fragment>
            <p className={className}>&#36; {price}</p>
        </React.Fragment>
    )
};

ProductPrice.propTypes = {
    className: PropTypes.string,
    price: PropTypes.number,
}

export default ProductPrice;