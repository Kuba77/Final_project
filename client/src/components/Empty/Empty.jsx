import React from "react";
import classes from "../../pages/FavoritesPage/FavoritesPage.module.scss";

const Empty = () => {
  return (
    <div className={classes.favorites__noitem}>
      <img
        alt="No items in cart"
        src="https://res.cloudinary.com/dl7xlw7cl/image/upload/v1639408051/sideAssets/SeekPng.com_anime-blush-png_380918_jzwoqn.png"
      />
      <h3>No items in cart</h3>
    </div>
  );
};

export default Empty;
