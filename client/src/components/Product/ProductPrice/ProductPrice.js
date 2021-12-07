import React from "react";

const ProductPrice = (props) => {

    return (
        <React.Fragment>
            <p className={props.className}>&#36; {props.price}</p>
        </React.Fragment>
    )
}

export default ProductPrice;