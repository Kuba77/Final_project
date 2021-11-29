import React from 'react'
import { Link } from 'react-router-dom'
import { BsBasket } from 'react-icons/bs';
import classes from './Basket.module.scss'


const Basket = () => {
    return (
        <div className={classes.header__cart}>
            <Link to="/cart">
                 <BsBasket  color='black' size={22}/>
            </Link>
        </div>
    )
}

export default Basket
