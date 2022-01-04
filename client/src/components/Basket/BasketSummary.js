import React from "react";
import classes from "./Basket.module.scss";
import { Link } from "react-router-dom";
import PromoCodeForm from "../Forms/PromoCode";


const BasketSummary = (props) => {
  const { totalSum, addPromoCode } = props;

  return (
      <section className={classes.basket__basketsum}>
        <div className={classes.basket__basketsum__container}>
            <div className={classes.basket__basketsum__textarea}>
                <h4>Shopping Summary</h4>
                <span>This is your great opportunity to use a promo code here. Don't be shy!</span>
                <p>Have a coupon code?</p>
                <PromoCodeForm addPromoCode={addPromoCode}/>
            </div>

            <div className={classes.basket__basketsum__total}>
                <div className={classes.basket__basketsum__total_area}>
                  <h4>Subtotal</h4>
                  <p>${totalSum}</p>
                </div>
                <div className={classes.basket__basketsum__total_area}>
                  <h4>Tax</h4>
                  <p>$2</p>
                </div>
                <div className={classes.basket__basketsum__total_area}>
                  <h4>Total</h4>
                  <p>$200</p>
                </div>

               <button className={classes.basket__basketsum__total_btn}>
                  Checkout
               </button>

               <Link to='/products' className={classes.basket__basketsum__total__continue}>
                 Continue shopping
               </Link>
            </div>
        </div>
      </section>
  )
};

export default BasketSummary;
