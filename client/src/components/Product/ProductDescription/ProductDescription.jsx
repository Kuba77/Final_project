import React from "react";
import PropTypes from "prop-types";

const ProductDescription = (props) => {
    const { className, description } = props;

    return (
        <React.Fragment>
                    <p className={className}>{description}</p>
        </React.Fragment>
    )
};

ProductDescription.propTypes = {
    className: PropTypes.string,
    description: PropTypes.string,
};

export default ProductDescription;