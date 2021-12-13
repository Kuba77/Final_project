import React from "react";
import ProductPrice from "../ProductPrice/ProductPrice";
import ProductStore from "../ProductStore/ProductStore";
import classes from "./ProductPriceBlock.module.scss";
import PropTypes from "prop-types";

const ProductPriceBlock = (props) => {
  const { product } = props;

  return (
    <React.Fragment>
      <div className={classes.price_block}>
        <ProductPrice
          className={classes.product_info__price}
          price={product.currentPrice}
        />
        {product.quantity > 0 ? (
          <ProductStore
            className={classes.product_info__store}
            store={`In stock ${product.quantity}`}
          />
        ) : (
          <ProductStore
            className={classes.product_info__store}
            store="Sold out"
          />
        )}
      </div>
    </React.Fragment>
  );
};

ProductPriceBlock.propTypes = {
  currentPrice: PropTypes.number,
  quantity: PropTypes.number,
}

export default ProductPriceBlock;