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
          <p className={classes.block_summary_description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
        <div className={classes.block_summary_right}>
          <div className={classes.block_summary_subtotal}>
            <p>Subtotal</p>
            <div className={classes.block_summary_subtotal_price}>
              <p>$</p>
              <p>Сумма</p>
            </div>
          </div>
          <div className={classes.block_summary_tax}>
            <p>PROMOCODE</p>
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
            <Link className={classes.block_summary_button} to="/order">
              Buy
            </Link>
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
