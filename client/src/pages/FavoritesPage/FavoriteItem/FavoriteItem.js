import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classes from "./FavoriteItem.module.scss";
import { AiFillHeart } from "react-icons/ai";
import { BsBasket } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import { setItemInCart, deleteItemFromCart } from "../../../store/cart/reducer";
import { deleteFavorites } from "../../../store/favorites/reducer";
import { itemsInCart } from "../../../store/selectors";

const FavoriteItem = (props) => {
  const { imgSrc, title, author, quantity, itemNo, price, salePrice, item } =
    props;
  const dispatch = useDispatch();
  const store = useSelector((state) => state);

  const isItemInCart = itemsInCart(store).some((item) => item._id === item._id);
  console.log(itemsInCart(store));
  console.log(isItemInCart);

  const deleteFavoritesClick = (e) => {
    e.stopPropagation();
    dispatch(deleteFavorites(item._id));
  };

  const addToCart = (value) => {
    try {
      if (isItemInCart) {
        dispatch(deleteItemFromCart(value._id));
      } else {
        dispatch(
          setItemInCart({ _id: value._id, product: value, cartQuantity: 1 })
        );
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className={classes.favorites__item}>
      <div className={classes.favorites__item__img}>
        <img src={imgSrc} />
        <AiFillHeart
          color="rgb(211, 6, 6)"
          size={32}
          onClick={deleteFavoritesClick}
        />
        {salePrice && <span></span>}
      </div>
      <div className={classes.favorites__item__textarea}>
        <Link to={`/product/${itemNo}`}>
          <h4>{title}</h4>
        </Link>
        <div className={classes.favorites__item__textarea_desc}>
          <p>Author: {author}</p>
          <p>Quantity: {quantity}</p>
          <div className={classes.favorites__item__textarea_price}>
            <p
              className={classes.favorite__item_price}
              style={salePrice && { textDecoration: "line-through" }}
            >
              ${price}
            </p>
            {salePrice && <h5>${salePrice}</h5>}
          </div>
        </div>

        <button
          onClick={() => {
            addToCart(item);
          }}
        >
          {isItemInCart ? (
            <MdOutlineCancel color="white" size={22} />
          ) : (
            <BsBasket color="white" size={22} />
          )}
        </button>
      </div>
    </div>
  );
};

export default FavoriteItem;
