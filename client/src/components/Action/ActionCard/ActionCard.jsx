import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import ProductTitle from "../Product/ProductTitle/ProductTitle";
import ProductAuthor from "../Product/ProductAuthor/ProductAuthor";
import ProductPrice from "../Product/ProductPrice/ProductPrice";
import ProductImg from "../Product/ProductImg/ProductImg";
import ProductStore from "../Product/ProductStore/ProductStore";
import classes from "./ActionCard.module.scss";
import Button from "../Button/Button";
import PropTypes from "prop-types";

const ActionCard = (props) => {
    
    return (
        <React.Fragment>

            <div className={classes.action}>

                <ProductImg
                    className={classes.action_img}
                    item={item.imageUrls[0]}
                    alt={action[firstCardToggle].name}
                />

                <div className={classes.action_info}>

                    <Link to={`/product/${action[firstCardToggle].itemNo}`}>
                        <ProductTitle
                            className={classes.action_info__title}
                            title={action[firstCardToggle].name}
                        />
                    </Link>

                    <ProductAuthor
                        className={classes.action_info__author}
                        author={action[firstCardToggle].author}
                    />

                    <div className={classes.action_info__priceblock}>
                        <ProductPrice
                            className={classes.action_info__price}
                            price={action[firstCardToggle].salePrice}
                        />

                        <ProductPrice
                            className={classes.action_info__price}
                            price={action[firstCardToggle].currentPrice}
                        />
                    </div>

                    {action[firstCardToggle].quantity > 0 ? (
                        <ProductStore
                            className={classes.product_info__store}
                            store={`In stock ${action[firstCardToggle].quantity}`}
                        />
                    ) : (
                        <ProductStore
                            className={classes.product_info__store}
                            store="Sold out"
                        />
                    )}

                    <Button
                        type="main"
                        onClick={() => {
                            console.log(action[firstCardToggle].productId);
                        }}
                    >
                        <BsBasket color="white" size={26}
                        />
                    </Button>

                </div>
            </div>

        </React.Fragment>
    );
};