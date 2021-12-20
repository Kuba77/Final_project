import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import classes from './FavoriteItem.module.scss';
import { AiFillHeart } from 'react-icons/ai';
import { BsBasket } from "react-icons/bs";
import { MdOutlineCancel } from 'react-icons/md';
import { setItemInCart, deleteItemFromCart } from "../../../store/cart/reducer";
import { deleteFavorites } from "../../../store/favorites/reducer";

const FavoriteItem = (props) => {

    const { imgSrc, title, author, quantity, itemNo, price, salePrice} = props;
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart.itemsInCart)
    const isItemInCart = cart.some((item) => item.itemNo === itemNo);


    const deleteFavoritesClick = (e) => {
        e.stopPropagation();
        dispatch(deleteFavorites(itemNo));
      };
     
    const addToCart = (info) => {
       
        try {
            if(isItemInCart){
                dispatch(deleteItemFromCart(itemNo))
        }
        else{
            dispatch(setItemInCart(info))
        }
    }   catch (error) {
            console.error(error.message);
    }
  }



    return (
    
        <div className={classes.favorites__item}>
            <div className={classes.favorites__item__img}>
                    <img src={imgSrc} />
                <AiFillHeart color='rgb(211, 6, 6)' size={32} onClick={deleteFavoritesClick}/>
                {salePrice && (<span></span>)}
            </div>    
            <div className={classes.favorites__item__textarea}>
                <Link to={`/product/${itemNo}`}>
                    <h4>{title}</h4>
                </Link>
                <div className={classes.favorites__item__textarea_desc}>
                    <p>Author: {author}</p>
                    <p>Quantity: {quantity}</p>
                    <div className={classes.favorites__item__textarea_price}>
                        <p className={classes.favorite__item_price} style={salePrice && {textDecoration:'line-through'}}>${price}</p>
                        {salePrice && (<h5>${salePrice}</h5>)}
                    </div>
                </div>
               
                    <button  onClick={() => {addToCart(props)}}>
                    {isItemInCart ? <MdOutlineCancel color="white" size={22}/> : <BsBasket color="white" size={22} /> }
                    </button>
            </div>
        </div>
    )
}

export default FavoriteItem
