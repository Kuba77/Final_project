import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import classes from "./BookItem.module.scss";
import { productPromotion } from "../../store/selectors";

const BookItem = (props) => {
  const { imageSrc, title, price, author, itemNo, salePrice} = props;

  const store = useSelector((state) => state);
  const promotion = productPromotion(store)

  return (
    <Link to={`/product/${itemNo}`}>
      <div className={classes.collection__item}>
        <div className={classes.collection__item_img}>
          <img src={imageSrc} alt={title} />
          {salePrice && (<span className={classes.collection__item_cover}></span>)}
        </div>
        <div className={classes.collection__item_info}>
          <div>
            <h4>{title}</h4>
            <span>{author}</span>
          </div>
          <div>
            <h4 className={classes.collection__item_price} style={salePrice && {textDecoration:'line-through'}}>${price}</h4>
            {salePrice && (<h5 className={classes.collection__item_price_sale}>${salePrice}</h5>)}
          </div>
        </div>
      </div>
     
    </Link>
  );
};

export default BookItem;
