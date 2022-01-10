import React from "react";
import { Link } from "react-router-dom";
import ProductTitle from "../../Product/ProductTitle/ProductTitle";
import ProductAuthor from "../../Product/ProductAuthor/ProductAuthor";
import ProductPrice from "../../Product/ProductPrice/ProductPrice";
import ProductImg from "../../Product/ProductImg/ProductImg";
import ProductStore from "../../Product/ProductStore/ProductStore";
import classes from "./PromotionCard.module.scss";
import PropTypes from "prop-types";

const PromotionCard = (props) => {
    const { item } = props

    return (
        <React.Fragment>
            <Link to={`/product/${item.itemNo}`}>
                <div className={classes.promotion}>

                    <ProductImg
                        className={classes.promotion_img}
                        item={item.imageUrls[0]}
                        alt={item.name}
                    />

                    <div className={classes.promotion_info}>

                        <ProductTitle
                            className={classes.promotion_info__title}
                            title={item.name}
                        />

                        <ProductAuthor
                            className={classes.promotion_info__author}
                            author={item.author}
                        />

                        <ProductPrice
                            blockClassName={classes.promotion_info__priceblock}
                            price={item.currentPrice}
                            salePrice={item.salePrice}
                        />

                        <ProductStore
                            className={classes.product_info__store}
                            quantity={item.quantity}
                        />

                    </div>
                </div>
            </Link>
        </React.Fragment>
    );
};

PromotionCard.propTypes = {
    className: PropTypes.string,
    description: PropTypes.string,
};

export default PromotionCard;
