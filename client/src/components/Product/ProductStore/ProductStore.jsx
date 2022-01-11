import React from "react";
import PropTypes from "prop-types";

const ProductStore = (props) => {
    const { className, store } = props;
    return (
        <React.Fragment>
            <p className={className}>{store}</p>
        </React.Fragment>
    )
};

ProductStore.propTypes = {
    className: PropTypes.string,
    store: PropTypes.string,
};

export default ProductStore;