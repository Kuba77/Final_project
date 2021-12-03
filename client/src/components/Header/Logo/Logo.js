import React from 'react'
import { Link } from "react-router-dom";
import classes from './Logo.module.scss';

const Logo = () => {
    return (
        <Link to="/" className={classes.header__logo}>
            <img src='https://res.cloudinary.com/dl7xlw7cl/image/upload/v1637850933/icon_nh6ic4.svg' alt='Clevr'/>
            <h1>マンガ</h1>
        </Link>
    )
}

export default Logo
