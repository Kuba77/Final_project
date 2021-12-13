import React from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from './FavoriteItem.module.scss';
import { AiFillHeart } from 'react-icons/ai';
import { BsBasket } from "react-icons/bs";
import { deleteFavorites } from "../../../store/favorites/reducer";

const FavoriteItem = (props) => {
    const dispatch = useDispatch();
    const { imgSrc, title, author, categories, quantity, itemNo} = props;
    
    const deleteFavoritesClick = (e) => {
        e.stopPropagation();
        dispatch(deleteFavorites(itemNo));
      };

    return (
        <div className={classes.favorites__item}>
            <div className={classes.favorites__item__img}>
                <img src={imgSrc} />
                <AiFillHeart color='rgb(211, 6, 6)' size={32} onClick={deleteFavoritesClick}/>
                <span></span>
            </div>    
            <div className={classes.favorites__item__textarea}>
                    <h4>{title}</h4>
                <div className={classes.favorites__item__textarea_desc}>
                    <p>Author: {author}</p>
                    <p>Category: {categories}</p>
                    <p>Quantity: {quantity}</p>
                </div>
               
                    <button >
                        <BsBasket color='white' size={20}/> 
                    </button>
            </div>
        </div>
    )
}

export default FavoriteItem
