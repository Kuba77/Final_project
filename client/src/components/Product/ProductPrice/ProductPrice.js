import React from "react";

const ProductPrice = (props) => {

    return (
        <React.Fragment>
            <p className={props.className} style={props.salePrice && {textDecoration:'line-through', fontSize:'1rem'}}>&#36; {props.price}</p>
            {props.salePrice && <p className={props.className}>&#36; {props.salePrice}</p>}
        </React.Fragment>
    )
}

export default ProductPrice;