import React from "react";

const ProductStore = (props) => {

    return (
        <React.Fragment>
            <p className={props.className}>{props.store}</p>
        </React.Fragment>
    )
}

export default ProductStore;