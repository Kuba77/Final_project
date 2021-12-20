import React from "react";
import { useSelector } from "react-redux";
import classes from './FavoritesPage.module.scss';
import Header from '../../components/Header/Header'
import FavoritesItem from './FavoriteItem/FavoriteItem'


const FavoritesPage = () => {

    const wishList = useSelector((state) => state.favorites.favoriteItems);

    return (
        <>
        
        <Header />
           
        <section className={classes.favorites}>
        <h3 className={classes.favorites__title}>Your Wishlist</h3>
        { wishList.length == 0 && (
            <>
                <div className={classes.favorites__noitem}>
                    <img src="https://res.cloudinary.com/dl7xlw7cl/image/upload/v1639408051/sideAssets/SeekPng.com_anime-blush-png_380918_jzwoqn.png" />
                    <h3>No favorite Items</h3> 
                </div>
            </>
            )}
            <div className={classes.favorites__wrapper}>
            { wishList.map(item => <FavoritesItem 
                key={item.key}
                imgSrc={item.imageUrls[2]} 
                title={item.name}
                author={item.author}
                salePrice={item.salePrice}
                price={item.currentPrice}
                quantity={item.quantity}
                itemNo={item.itemNo}
            />)}
            </div>
        </section>
       </>
    )
}

export default FavoritesPage
