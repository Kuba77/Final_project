import React, { useState } from 'react';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import classes from './UserMenu.module.scss';
import { FaUserCog } from 'react-icons/fa';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { customerData } from "../../../store/selectors";

const UserMenu = () => {

    const[isOpen, setOpen] = useState(false);
    const store = useSelector((state) => state);

    const userMenuHandler = () => {
        setOpen(!isOpen);
    }

    return (
        <div className={classes.header__userMenu}>
            <div className={classes.header__userMenu_profile} onClick={userMenuHandler}>
                <img src={customerData(store).avatarUrl} alt='profile' />
            </div>
            <div className={classes.header__userMenu_menu}  style={isOpen ? {opacity:1} : {opacity:0} }>
                <ul>
                    <Link to='/'> <li> <FaUserCog /> Profile </li> </Link>
                    <Link to='/'> <li>  <RiLogoutBoxRLine /> Logout </li> </Link>  
                </ul>
            </div>
        </div>
    )
}

export default UserMenu
