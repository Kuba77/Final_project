import React from "react";

const ProductDescription = (props) => {

    return (
        <React.Fragment>
                    <p className={props.className}>{props.description}</p>
        </React.Fragment>
    )
}

export default ProductDescription;