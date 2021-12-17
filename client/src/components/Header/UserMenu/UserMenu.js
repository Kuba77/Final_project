import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./UserMenu.module.scss";
import { FaUserCog } from "react-icons/fa";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { customerData } from "../../../store/selectors";
import { logoutCustomer } from "../../../services/user";
import { removeCustomer } from "../../../store/customer/reducer";
import { clearCart } from "../../../store/cart/reducer";
import { removeFavorites } from "../../../store/favorites/reducer";

const UserMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const store = useSelector((state) => state);
  const dispatch = useDispatch();
  const userMenuHandler = () => {
    setOpen(!isOpen);
  };

  const logOutCustomer = () => {
    logoutCustomer();
    dispatch(removeCustomer());
    dispatch(clearCart());
    dispatch(removeFavorites());
  };

  return (
    <div className={classes.header__userMenu}>
      <div
        className={classes.header__userMenu_profile}
        onClick={userMenuHandler}
      >
        <img
          src={
            customerData(store).avatarUrl
              ? customerData(store).avatarUrl
              : "https://www.pngarts.com/files/8/Cute-Anime-PNG-Image.png"
          }
          alt="profile"
        />
      </div>
      <div
        className={classes.header__userMenu_menu}
        style={isOpen ? { opacity: 1 } : { opacity: 0 }}
      >
        <ul>
          <Link to="/">
            <li>
              <FaUserCog /> Profile
            </li>
          </Link>
          <Link to="/">
            <li
              onClick={() => {
                logOutCustomer();
              }}
            >
              <RiLogoutBoxRLine />
              Logout
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;
