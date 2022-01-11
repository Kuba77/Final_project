import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { CgMenuRight, CgClose } from "react-icons/cg";
import classes from "./Header.module.scss";
import Nav from "./Nav/Nav";
import Logo from "./Logo/Logo";
import Basket from "./Basket/Basket";
import useWindowSize from "../../hooks/useWindowSize";
import Button from "../Button/Button";
import SearchBar from "../../components/SearchBar/SearchBar";
import UserMenu from "./UserMenu/UserMenu";
import { customerData } from "../../store/selectors";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const size = useWindowSize();
  const store = useSelector((state) => state);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size, menuOpen]);

  const handleMenuToggle = () => {
    setMenuOpen((p) => !p);
  };

  const menuToggle = !menuOpen ? (
    <CgMenuRight onClick={handleMenuToggle} color="black" />
  ) : (
    <CgClose onClick={handleMenuToggle} />
  );

  const history = useHistory();
  const HandleGoToLoginPage = useCallback(() => {
    history.push("/login");
  }, [history]);

  return (
    <header className={classes.header}>
      <Logo />
      {size.width > 1116 && <SearchBar />}

      <Nav />
      <Basket />

      {customerData(store)?._id && <UserMenu />}

      {size.width > 768 && !customerData(store)?._id && (
        <Button type="primary" size="s" onClick={HandleGoToLoginPage}>
          {"Sign in"}
        </Button>
      )}

      <div className={classes.header__menu}>
        <div className={classes.header__menu__toggle}>{menuToggle}</div>
        <aside className={`${classes.menu} ${menuOpen && classes.show}`}>
          <Nav
            isMenu
            menuToggle={handleMenuToggle}
            customerName={customerData(store)?.firstName}
          />
          <div className={classes.searchBar__burger}>
            <SearchBar />
          </div>
        </aside>
      </div>
    </header>
  );
};

export default Header;
