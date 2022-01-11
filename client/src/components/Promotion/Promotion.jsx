import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../services/products";
import PromotionSlider from "./PromotionSlider/PromotionSlider";
import classes from "./Promotion.module.scss";
import Timer from "../Timer/Timer";
import { setPromotionTimer } from "../../store/promotion/reducer";
import { productPromotion } from "../../store/selectors";
import PropTypes from "prop-types";

const Promotion = () => {
  const promotionDataTime = "12 Jan 2022 23:30:00 GMT+2";
  const store = useSelector((state) => state);
  const [promotionData, setPromotionData] = useState([]);
  const dispatch = useDispatch();

  const getCollection = useCallback(async () => {
    let promotionArr = [];
    const response = await getAllProducts();
    response.map((item) => {
      if (item.salePrice) {
        promotionArr.push(item);
      }
      return promotionArr;
    });
    setPromotionData(promotionArr);
  }, [setPromotionData]);

  const getPromotionTime = useCallback(() => {
    if (new Date(promotionDataTime).getTime() > new Date().getTime()) {
      dispatch(setPromotionTimer(true));
    } else {
      dispatch(setPromotionTimer(false));
    }
  }, [dispatch]);

useEffect(() => {
  getCollection();
  getPromotionTime();
}, []);

return (
  <React.Fragment>
    {promotionData.length !== 0 && productPromotion(store) ?
      <div className={classes.promotion_block}>
        <div className={classes.promotion_block__container}>
          <div className={classes.timer}>
            <h2>Flash Sale</h2>
            <p>
              You have a unique opportunity to buy best manga on lover price. Hurry up, action is valid for a limited time.
            </p>
            <Timer time={promotionDataTime} />
          </div>

          <PromotionSlider promotionData={promotionData} />

        </div>
      </div>
      :
      ""
    }
  </React.Fragment>
);
};

Promotion.propTypes = {
  timer: PropTypes.string,
};

export default Promotion;
