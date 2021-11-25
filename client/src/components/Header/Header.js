import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuRight, CgClose } from "react-icons/cg";
import classes from "./Header.module.scss";
import Nav from "./Nav/Nav";
import useWindowSize from '../../hooks/useWindowSize';
import { BsBasket } from 'react-icons/bs';
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
        <CgMenuRight onClick={handleMenuToggle} color={'black'} />
    ) : (
        <CgClose onClick={handleMenuToggle} />
    );

    return (
        <header className={classes.header}>
             <Link to="/" className={classes.header__logo}>
                <img src='https://res.cloudinary.com/dl7xlw7cl/image/upload/v1637850933/icon_nh6ic4.svg' alt='Cevr'/>
                <h1>マンガ</h1>
             </Link>
             <Nav />
            <div className={classes.header__cart}>
                    <Link to="/cart">
                        <BsBasket  color={'black'} size={22}/>
                    </Link>
            </div>

            {size.width > 768 ? (
                 <Button
                 type={"primary" }
                 size={'s'}
                  >
                     {"Sign in"}
                 </Button>
            ) : null}

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
