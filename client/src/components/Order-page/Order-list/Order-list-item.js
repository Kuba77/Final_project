import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./order-list-item.module.scss";
const OrderItem = (props) => {
  const { item } = props;
  return (
    <div className={classes.order_item}>
      <div className={classes.order_item__wrapper}>
        <Link to={`/product/${item.product.itemNo}`}>
          <img
            src={item.product.imageUrls[0]}
            alt={item.product.name}
            className={classes.order_item__image}
          />
        </Link>
      </div>
    </div>
  );
};
export default OrderItem;
