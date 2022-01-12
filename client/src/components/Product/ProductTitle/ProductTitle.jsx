import React from "react";
import PropTypes from "prop-types";

const ProductTitle = (props) => {
    const { className, title } = props;
    return (
        <React.Fragment>
            <h2 className={className}>{title}</h2>
        </React.Fragment>
    )
};

ProductTitle.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
};

export default ProductTitle;
