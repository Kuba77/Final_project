import React from "react";

const ProductTitle = (props) => {

    return (
        <React.Fragment>
            <h2 className={props.className}>{props.title}</h2>
        </React.Fragment>
    )
}

export default ProductTitle;