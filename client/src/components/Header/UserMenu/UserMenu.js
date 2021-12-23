import React, { useState, useEffect } from "react";
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
import { useClickOutside } from "react-click-outside-hook";

const UserMenu = () => {
  const [isOpen, setOpen] = useState(false);
  const [parentRef, isClickOutside] = useClickOutside();
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
  const closeMenuHandler = () => {
    setOpen(false);
  }; 


  useEffect(() => {
    if (isClickOutside) {
      closeMenuHandler();
    }
  }, [isClickOutside]);

  return (
    <div className={classes.header__userMenu} ref={parentRef} onClick={userMenuHandler}>
      <div className={classes.header__userMenu_profile}>
        <img
          src={
            customerData(store).avatarUrl
              ? customerData(store).avatarUrl
              : "https://res.cloudinary.com/dl7xlw7cl/image/upload/v1639851745/sideAssets/overlord-keeno-fasris-inberun-evileye-oboi-8754_w635_ld1qrx.jpg"
          }
          alt="profile"
        />
      </div>
      <div
        className={classes.header__userMenu_menu}
        style={isOpen ? { display: 'block' } : { display: 'none'}}
      >
        <ul>
          <Link to="/profile">
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
