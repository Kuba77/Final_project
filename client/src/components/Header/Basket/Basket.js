import React from 'react'
import { Link } from 'react-router-dom'
import { BsBasket } from 'react-icons/bs';
import Counter from './Counter/Counter'
import classes from './Basket.module.scss'


const Basket = () => {


    return (
        <div className={classes.header__cart}>
            <Counter quantity={2}/>

            <Link to="/cart">
                 <BsBasket  color='black' size={22}/>
            </Link>
        </div>
    )
}

export default Basket
