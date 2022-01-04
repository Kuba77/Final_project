import React from "react";
import classes from "./Promo.module.scss";

const Promo = () => {
    return (
        <React.Fragment>
            <div className={classes.promo}>

                <div className={classes.promo_block}>
                    <div className={classes.promo_block__img1}></div>
                    <h3 className={classes.promo_block__title}>Quick Delivery</h3>
                </div>

                <div className={classes.promo_block}>
                    <div className={classes.promo_block__img2}></div>
                    <h3 className={classes.promo_block__title}>Secure Payment</h3>
                </div>

                <div className={classes.promo_block}>
                    <div className={classes.promo_block__img3}></div>
                    <h3 className={classes.promo_block__title}>Best Quality</h3>
                </div>

                <div className={classes.promo_block}>
                    <div className={classes.promo_block__img4}></div>
                    <h3 className={classes.promo_block__title}>Return Guarantee</h3>
                </div>

            </div>
        </React.Fragment>
    );
};
export default Promo;