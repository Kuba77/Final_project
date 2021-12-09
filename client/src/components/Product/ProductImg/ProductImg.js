import React from "react";

const ProductImg = (props) => {

    return (
        <React.Fragment>
            <img className={props.className} src={props.item} alt={props.alt} onClick={props.onClick} />
        </React.Fragment>
    )
}

export default ProductImg;