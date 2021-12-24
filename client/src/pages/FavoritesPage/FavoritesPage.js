import React from "react";
import { useSelector } from "react-redux";
import classes from "./FavoritesPage.module.scss";
import Header from "../../components/Header/Header";
import FavoritesItem from "./FavoriteItem/FavoriteItem";
import { itemsInFavorite } from "../../store/selectors";

const FavoritesPage = () => {
  const store = useSelector((state) => state);

  return (
    <>
      <Header />

      <section className={classes.favorites}>
        <h3 className={classes.favorites__title}>Your Wishlist</h3>
        {itemsInFavorite(store).length == 0 && (
          <>
            <div className={classes.favorites__noitem}>
              <img src="https://res.cloudinary.com/dl7xlw7cl/image/upload/v1639408051/sideAssets/SeekPng.com_anime-blush-png_380918_jzwoqn.png" />
              <h3>No favorite Items</h3>
            </div>
          </>
        )}
        <div className={classes.favorites__wrapper}>
          {itemsInFavorite(store).map((item, index) => (
            <FavoritesItem
              key={index}
              imgSrc={item.imageUrls[2]}
              title={item.name}
              author={item.author}
              salePrice={item.salePrice}
              price={item.currentPrice}
              quantity={item.quantity}
              itemNo={item.itemNo}
              item={item}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default FavoritesPage;
