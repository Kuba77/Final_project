import React from 'react'
import classes from './Basket.module.scss';


const BasketHeader = () => {
    return (
        <div className={classes.basket__header}>
            <div className={classes.basket__header_wrap}>
                    <ul>
                        <li className={classes.basket__header__item}>
                            Item
                        </li>
                        <li className={classes.basket__header__item}>
                            Quantity
                        </li>

                        <li className={classes.basket__header__item}>
                            Price
                        </li>

                        <li className={classes.basket__header__item}>
                            Total Price
                        </li>
                    </ul>
            </div>
        </div>
    )
}

export default BasketHeader
