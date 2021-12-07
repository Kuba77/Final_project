import React from "react";

const ProductImg = (props) => {

    return (
        <React.Fragment>
            <img id={props.id} className={props.className} src={props.item} alt={props.alt} />
</React.Fragment>
    )
}

export default ProductImg;