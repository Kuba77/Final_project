import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getAllProducts } from "../../services/products";
import { BsBasket, BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs";
import { setItemInCart, deleteItemFromCart } from "../../store/cart/reducer";
import ProductTitle from "../Product/ProductTitle/ProductTitle";
import ProductAuthor from "../Product/ProductAuthor/ProductAuthor";
import ProductPrice from "../Product/ProductPrice/ProductPrice";
import ProductImg from "../Product/ProductImg/ProductImg";
import ProductStore from "../Product/ProductStore/ProductStore";
import classes from "./Action.module.scss";
import Button from "../Button/Button";
import Timer from "../Timer/Timer";
import PropTypes from "prop-types";

const Action = (props) => {
  const { timer } = props;
  let { productId } = useParams();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.itemsInCart)
  const isItemInCart = cart.some((item) => item.itemNo === productId);
  const [action, setAction] = useState([]);
  const [firstCardToggle, setFirstCardToggle] = useState(0);
  const [secondCardToggle, setSecondCardToggle] = useState(1);
  const [actionTime, setActionTime] = useState();

  const getCollection = useCallback(async () => {
    let actionArr = []
    const response = await getAllProducts();
    response.map((item) => {
      if (item.salePrice) {
        actionArr.push(item)
      }
      return actionArr
    })
    setAction(actionArr)
  }, [setAction]);

  useEffect(() => {
    getCollection();
  }, [getCollection]);

  const rightClick = useCallback(() => {
    if (firstCardToggle === action.length - 1) {
      setFirstCardToggle(0)
    } else {
      setFirstCardToggle(firstCardToggle + 1)
    }

    if (secondCardToggle === action.length - 1) {
      setSecondCardToggle(0)
    } else {
      setSecondCardToggle(secondCardToggle + 1)
    }
  }, [firstCardToggle, secondCardToggle, action.length])

  const leftClick = useCallback(() => {
    if (firstCardToggle === 0) {
      setFirstCardToggle(action.length - 1)
    } else {
      setFirstCardToggle(firstCardToggle - 1)
    }

    if (secondCardToggle === 0) {
      setSecondCardToggle(action.length - 1)
    } else {
      setSecondCardToggle(secondCardToggle - 1)
    }
  }, [firstCardToggle, secondCardToggle, action.length])

  const getActionTime = useCallback(() => {
    if (new Date(timer).getTime() > new Date().getTime()) {
      setActionTime(true)
    } else {
      setActionTime(false)
    }
  }, [timer]);

  setInterval(getActionTime, 1000)

  useEffect(() => {
    getActionTime();
  }, [getActionTime]);

  const addToCart = (info) => {
    try {
      if (isItemInCart) {
        dispatch(deleteItemFromCart(productId))
      }
      else {
        dispatch(setItemInCart(info))
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  return (
    <React.Fragment>
      {action.length !== 0 && actionTime ?
        (<div className={classes.action_block}>

          <div className={classes.action_block__container}>

            <div className={classes.timer}>
              <h2>Flash Sale</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <Timer time={timer} />
            </div>

            <div className={classes.action_content}>

              <Button
                type="btn--secondary"
                onClick={() => { leftClick() }}
              >
                <BsCaretLeftFill color="#8D28AD" size={26} />
              </Button>

              <div className={classes.action}>

                <ProductImg
                  className={classes.action_img}
                  item={action[firstCardToggle].imageUrls[0]}
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
                      addToCart(action);
                    }}
                  >
                    <BsBasket color="white" size={26}
                    />
                  </Button>

                </div>
              </div>

              <Button
                type="btn--secondary"
                onClick={() => { rightClick() }}
              >
                <BsCaretRightFill color="#8D28AD" size={26} />
              </Button>

              {action.length >= 2 ?
                (
                  <div className={classes.action}>
                    <ProductImg
                      className={classes.action_img}
                      item={action[secondCardToggle].imageUrls[0]}
                      alt={action[secondCardToggle].name}
                    />

                    <div className={classes.action_info}>
                      <ProductTitle
                        className={classes.action_info__title}
                        title={action[secondCardToggle].name}
                      />

                      <ProductAuthor
                        className={classes.action_info__author}
                        author={action[secondCardToggle].author}
                      />

                      <div className={classes.action_info__priceblock}>
                        <ProductPrice
                          className={classes.action_info__price}
                          price={action[secondCardToggle].salePrice}
                        />

                        <ProductPrice
                          className={classes.action_info__price}
                          price={action[secondCardToggle].currentPrice}
                        />
                      </div>

                      {action[secondCardToggle].quantity > 0 ? (
                        <ProductStore
                          className={classes.product_info__store}
                          store={`In stock ${action[secondCardToggle].quantity}`}
                        />
                      ) : (
                        <ProductStore
                          className={classes.product_info__store}
                          store="Sold out"
                        />
                      )}

                      <Button
                        type="main"
                      >
                        <BsBasket color="white" size={26} />
                      </Button>
                    </div>
                  </div>

                ) : ("")}

            </div>
          </div>

          <div className={classes.blur}></div>

        </div>
        ) : ("")}
    </React.Fragment>
  );
};


Action.propTypes = {
  timer: PropTypes.string
}

export default Action;