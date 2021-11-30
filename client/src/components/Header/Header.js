import React, { useEffect, useState } from "react";
import { CgMenuRight, CgClose } from "react-icons/cg";
import classes from "./Header.module.scss"
import Nav from "./Nav/Nav";
import Logo from './Logo/Logo';
import Basket from "./Basket/Basket";
import useWindowSize from '../../hooks/useWindowSize';
import Button from "../Button/Button";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size, menuOpen]);

  const handleMenuToggle = () => {
    setMenuOpen((p) => !p);
  };

    const menuToggle = !menuOpen ? (
        <CgMenuRight onClick={handleMenuToggle} color='black' />
    ) : (
        <CgClose onClick={handleMenuToggle} />
    );

    return (
        <header className={classes.header}>
            <Logo />
            <Nav />
            <Basket />

            {size.width > 768 && (
                 <Button
                 type="primary"
                 size='s'
                  >
                     {"Sign in"}
                 </Button>
            ) }

            <div className={classes.header__menu}>
                <div className={classes.header__menu__toggle}>{menuToggle}</div>
                <aside className={`${classes.menu} ${menuOpen && classes.show}`}>
                    <Nav isMenu menuToggle={handleMenuToggle} />
                </aside>
            </div>
        </header>
    );
};

export default Header;
