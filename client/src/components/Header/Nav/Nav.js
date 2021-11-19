import React from "react";
import { Link } from "react-router-dom";
import classes from "./Nav.module.scss";

const Nav = ({ isMenu, menuToggle }) => {
  return (
    <nav className={isMenu ? classes.menu__nav : classes.nav}>
      <ul>
        <li onClick={menuToggle}>
          <Link to="/categories">Home</Link>
        </li>
        <li onClick={menuToggle}>
          <Link to="/categories">Categories</Link>
        </li>
        <li onClick={menuToggle}>
          <Link to="/favorites">Favorites</Link>
        </li>
        <li onClick={menuToggle}>
          <Link to="/login">LOGIN</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
