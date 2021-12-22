import React from "react";
import classes from "./Promo.module.scss";

const Promo = () => {
    return (
        <React.Fragment>
            <div className={classes.promo}>

                <div className={classes.promo_block}>
                    <div className={classes.promo_block__img1}></div>
                    <h3 className={classes.promo_block__title}>Quick Delivery</h3>
                    <p className={classes.promo_block__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className={classes.promo_block}>
                    <div className={classes.promo_block__img2}></div>
                    <h3 className={classes.promo_block__title}>Secure Payment</h3>
                    <p className={classes.promo_block__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className={classes.promo_block}>
                    <div className={classes.promo_block__img3}></div>
                    <h3 className={classes.promo_block__title}>Best Quality</h3>
                    <p className={classes.promo_block__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

                <div className={classes.promo_block}>
                    <div className={classes.promo_block__img4}></div>
                    <h3 className={classes.promo_block__title}>Return Guarantee</h3>
                    <p className={classes.promo_block__text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>

            </div>
        </React.Fragment>
    );
};
export default Promo;