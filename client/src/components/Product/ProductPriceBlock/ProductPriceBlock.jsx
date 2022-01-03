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
          salePrice={product.salePrice}
        />
        <ProductStore
          className={classes.product_info__store}
          quantity={product.quantity}
        />
      </div>
    </React.Fragment>
  );
};

ProductPriceBlock.propTypes = {
  currentPrice: PropTypes.number,
  salePrice: PropTypes.number,
  quantity: PropTypes.number,
}

export default ProductPriceBlock;
