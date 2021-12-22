import React from "react";
import { Link } from "react-router-dom";
import ProductTitle from "../../Product/ProductTitle/ProductTitle";
import ProductAuthor from "../../Product/ProductAuthor/ProductAuthor";
import ProductPrice from "../../Product/ProductPrice/ProductPrice";
import ProductImg from "../../Product/ProductImg/ProductImg";
import ProductStore from "../../Product/ProductStore/ProductStore";
import classes from "./ActionCard.module.scss";
import PropTypes from "prop-types";

const ActionCard = (props) => {
    const { item } = props
    return (
        <React.Fragment>
            <Link to={`/product/${item.itemNo}`}>
                <div className={classes.action}>

                    <ProductImg
                        className={classes.action_img}
                        item={item.imageUrls[0]}
                        alt={item.name}
                    />

                    <div className={classes.action_info}>

                        <ProductTitle
                            className={classes.action_info__title}
                            title={item.name}
                        />

                        <ProductAuthor
                            className={classes.action_info__author}
                            author={item.author}
                        />

                        <div className={classes.action_info__priceblock}>
                            <ProductPrice
                                className={classes.action_info__price}
                                price={item.salePrice}
                            />

                            <ProductPrice
                                className={classes.action_info__price}
                                price={item.currentPrice}
                            />
                        </div>

                        {item.quantity > 0 ? (
                            <ProductStore
                                className={classes.product_info__store}
                                store={`In stock ${item.quantity}`}
                            />
                        ) : (
                            <ProductStore
                                className={classes.product_info__store}
                                store="Sold out"
                            />
                        )}

                    </div>
                </div>
            </Link>
        </React.Fragment>
    );
};

ActionCard.propTypes = {
    className: PropTypes.string,
    description: PropTypes.string,
};

export default ActionCard;