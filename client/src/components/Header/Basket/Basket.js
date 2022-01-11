import React from "react";
import { Link } from "react-router-dom";
import { BsBasket } from "react-icons/bs";
import Counter from "./Counter/Counter";
import classes from "./Basket.module.scss";
import { useSelector } from "react-redux";
import { itemsInCart } from "../../../store/selectors";

const Basket = () => {
  const store = useSelector((state) => state);
  return (
    <div className={classes.header__cart}>
      <Counter quantity={itemsInCart(store).length} />

      <Link to="/cart">
        <BsBasket color="black" size={22} />
      </Link>
    </div>
  );
};

export default Basket;
