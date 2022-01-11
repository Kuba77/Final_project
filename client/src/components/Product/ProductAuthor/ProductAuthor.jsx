import React from "react";
import PropTypes from "prop-types";

const ProductAuthor = (props) => {
    const { className, author} = props;
    return (
        <React.Fragment>
            <p className={className}>{author}</p>
        </React.Fragment>
    )
};

ProductAuthor.propTypes = {
    className: PropTypes.string,
    author: PropTypes.string,
};

export default ProductAuthor;