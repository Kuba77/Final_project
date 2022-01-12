import React from "react";
import { useSelector } from "react-redux";
import classes from "./FavoritesPage.module.scss";
import FavoritesItem from "./FavoriteItem/FavoriteItem";
import { itemsInFavorite } from "../../store/selectors";
import Empty from "../../components/Empty/Empty";

const FavoritesPage = () => {
  const store = useSelector((state) => state);
  const favoritesItemsList = itemsInFavorite(store).map((item, index) => (
    <FavoritesItem
      key={index}
      imgSrc={item.imageUrls[2]}
      title={item.name}
      author={item.author}
      salePrice={item.salePrice}
      price={item.currentPrice}
      quantity={item.quantity}
      itemNo={item.itemNo}
      id={item._id}
      item={item}
    />
  ));

  return (
    <>
      <section className={classes.favorites}>
        <h3 className={classes.favorites__title}>Your Wishlist</h3>
        {itemsInFavorite(store).length === 0 && <Empty />}
        <div className={classes.favorites__wrapper}>{favoritesItemsList}</div>
      </section>
    </>
  );
};

export default FavoritesPage;
