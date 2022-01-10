import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import classes from "./order-list-item.module.scss";
import { FiTrash } from "react-icons/fi";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const OrderItem = (props) => {
  const {
    item,
    deleteProductFromCart,
    decreaseProduct,
    increaseProduct,
    customer,
    localAddRemoveQuantity,
  } = props;
  const sum = item.product.currentPrice * item.cartQuantity;
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

        <div className={classes.order_item__description}>
          <span className={classes.order_item__description_price}>
            Total price: {sum} $
          </span>
        </div>
        <div className={classes.order_item__footer}>
          <AiOutlineMinus
            color="#8D28AD"
            size={15}
            onClick={(e) => {
              if (!customer) {
                localAddRemoveQuantity(item.product, e.target.name);
              } else {
                decreaseProduct(item.product);
              }
            }}
          />
          <span className={classes.order_item__quantity}>
            {item.cartQuantity}{" "}
          </span>
          <AiOutlinePlus
            color="#8D28AD"
            size={15}
            onClick={(e) => {
              if (!customer) {
                localAddRemoveQuantity(item.product, e.target.name);
              } else {
                increaseProduct(item.product);
              }
            }}
          />
          <FiTrash
            color="red"
            size={15}
            onClick={() => {
              deleteProductFromCart(item.product);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default OrderItem;
