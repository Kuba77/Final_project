import React from "react";
import PropTypes from "prop-types";

const ProductImg = (props) => {
    const { className, item, alt, onClick } = props;

    return (
        <React.Fragment>
            <img className={className} src={item} alt={alt} onClick={onClick} />
        </React.Fragment>
    )
};

ProductImg.propTypes = {
    className: PropTypes.string,
    item: PropTypes.string,
    alt: PropTypes.string,
    onClick: PropTypes.func,
};

export default ProductImg;
