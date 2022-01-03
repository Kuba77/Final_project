import React from 'react';
import classes from './Basket.module.scss';
import BasketHeader from './BasketHeader';
import BasketItemList from './BasketItemList';


const Basket = () => {
    return (
       <section className={classes.basket__section}>
            <BasketHeader />
            <BasketItemList />
       </section>
    )
}

export default Basket
