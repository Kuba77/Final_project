import React from "react";
import classes from "./cart.module.scss";
import { Link } from "react-router-dom";
import PromoCodeForm from "../../components/Forms/PromoCode";

const CartSummary = (props) => {
  const { totalSum, addPromoCode } = props;

  return (
    <div className={classes.block_summary}>
      <div className={classes.summary}>
        <div className={classes.block_summary_left}>
          <h3 className={classes.block_summary_title}>Shopping Summary</h3>
        </div>
        <div className={classes.block_summary_right}>
          <div className={classes.block_summary_tax}>
            <p>PROMO</p>
            <div className={classes.block_summary_tax_price}>
              <PromoCodeForm addPromoCode={addPromoCode} />
            </div>
          </div>
          <hr className={classes.block_summary_hr} />
          <div className={classes.block_summary_total}>
            <p>Total</p>
            <div className={classes.block_summary_total_price}>
              <p>$</p>
              <p>{totalSum}</p>
            </div>
          </div>
          <div className={classes.block_summary_button_position}>
            <button className={classes.block_summary_button}>Buy</button>
            <Link
              to={`/products`}
              className={classes.block_summary_button_to_other_products}
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
