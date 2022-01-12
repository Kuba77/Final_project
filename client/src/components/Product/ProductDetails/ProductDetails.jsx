import React from "react";
import classes from "./ProductDetails.module.scss";
import PropTypes from "prop-types";

const ProductDetails = (props) => {
  const { product } = props;

  const ProductGenre = product.genre.map((item, index) => {
    return <span key={item}>
       {" "}
       {item}
       {index !== product.genre.length - 1 ? "," : ""}
     </span>
   })

  return (
    <React.Fragment>
      <div className={classes.product_block__details}>
        <div className={classes.product_categories}>
          <p>Book Title</p>
          <p>Author</p>
          <p>Product Code</p>
          <p>Book Format</p>
          <p>Date Published</p>
          <p>Publisher</p>
          <p>Genre</p>
        </div>

        <div className={classes.product_data}>
          <p>{product.name}</p>
          <p>{product.author}</p>
          <p>{product.itemNo}</p>
          <p>{product.book_format}</p>
          <p>{product.date_published}</p>
          <p>{product.publisher}</p>
          <p>{ProductGenre}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

ProductDetails.propTypes = {
  name: PropTypes.string,
  author: PropTypes.string,
  itemNo: PropTypes.string,
  book_format: PropTypes.string,
  date_published: PropTypes.string,
  publisher: PropTypes.string,
  genre: PropTypes.string
};

export default ProductDetails;
