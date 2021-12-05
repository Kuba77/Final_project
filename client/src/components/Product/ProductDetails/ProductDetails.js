import React from "react";
import classes from "./ProductDetails.module.scss";

const ProductDetails = (props) => {

    return (
        <React.Fragment>

            <div className={classes.product_block__details}>
                <div className={classes.product_categories}>
                    <p>Book Title</p>
                    <p>Author</p>
                    <p>Product Code</p>
                    <p>Book Format</p>
                    <p>Date Published</p>
                    <p>Date Published</p>
                    <p>Genre</p>
                </div>

                <div className={classes.product_data}>
                    <p>{props.product.name}</p>
                    <p>{props.product.author}</p>
                    <p>{props.product.itemNo}</p>
                    <p>{props.product.book_format}</p>
                    <p>{props.product.date_published}</p>
                    <p>{props.product.publisher}</p>
                    <p>{props.product.genre.map((item, index) => (
                        <span key={index}> {item}{index !== (props.product.genre.length-1) ? ',' : ''}</span>
                    ))}</p>
                </div>


            </div>
        </React.Fragment>
    )
}

export default ProductDetails;