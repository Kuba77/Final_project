import React from "react";

const ProductAutor = (props) => {

    return (
        <React.Fragment>
            <p className={props.className}>{props.author}</p>
        </React.Fragment>
    )
}

export default ProductAutor;