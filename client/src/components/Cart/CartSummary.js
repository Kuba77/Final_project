import React from "react"
import classes from "./cart.module.scss"
import {Link} from "react-router-dom"

const CartSummary = () => {

    return(
        <div className={classes.block_summary}>
            <div className={classes.summary}>
                <div className={classes.block_summary_left}>
                    <h3 className={classes.block_summary_title}>Shopping Summary</h3>
                    <p className={classes.block_summary_description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
                        <p>Tax</p>
                        <div className={classes.block_summary_tax_price}>
                            <p>$</p>
                            <p>Сумма</p>
                        </div>
                    </div>
                    <hr className={classes.block_summary_hr} />
                    <div className={classes.block_summary_total}>
                        <p>Total</p>
                        <div className={classes.block_summary_total_price}>
                            <p>$</p>
                            <p>Сумма</p>
                        </div>
                    </div>
                    <div className={classes.block_summary_button_position}>
                        <button className={classes.block_summary_button}>Buy</button>
                        <Link to="/product" className={classes.block_summary_button_to_other_products}>Continue Shopping</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartSummary