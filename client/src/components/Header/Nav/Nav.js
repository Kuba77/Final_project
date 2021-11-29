import React from "react";
import { Link } from "react-router-dom";
import classes from "./Nav.module.scss";


const Nav = ({ isMenu, menuToggle }) => {
    return (
        <nav className={isMenu ? classes.menu__nav : classes.nav}>
            <ul>
            <li onClick={menuToggle}>
                    <Link to="/">Home</Link>
                </li>
                
                {isMenu && (
                    <li onClick={menuToggle}>
                        <Link to="/login">Sign in</Link>
                    </li>
                )}
                <li onClick={menuToggle}>
                    <Link to="/categories">Categories</Link>
                </li>
                <li onClick={menuToggle}>
                    <Link to="/favorites">Favorites</Link>
                </li>
            </ul>
          
        </nav>
    );
};

export default Nav;
