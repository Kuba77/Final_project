import React from "react";
import { Link } from "react-router-dom";
import classes from "./SearchContent.module.scss";

const SearchContent = (props) => {
  const { imageSrc, title, price, itemNo, collapseContainer } = props;


  return (
    <Link to={`/product/${itemNo}`} onClick={ () => { collapseContainer()}}>
      <div className={classes.content__container}>
        <div className={classes.content__container_item}>
          <img src={imageSrc} alt={title} />
        </div>
        <div className={classes.content__container_item_title}>{title}</div>
        <div className={classes.content__container_item_price}>{price}</div>
      </div>
    </Link>
  );
};

export default SearchContent;
