import React from 'react';
import classes from './Basket.module.scss';
import BasketHeader from './BasketHeader';
import BasketItemList from './BasketItemList';
import BasketSummary from './BasketSummary';

const Basket = (props) => {
    
    return (
       <section className={classes.basket__section}>
            <BasketHeader />
            <BasketItemList />
            <BasketSummary props={props}/>
       </section>
    )
}

export default Basket
