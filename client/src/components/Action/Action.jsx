import React, { useEffect, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getAllProducts } from "../../services/products";
import classes from "./Action.module.scss";
import Timer from "../Timer/Timer";
import PropTypes from "prop-types";
import ActionCard from "./ActionCard/ActionCard";
import SwiperCore, { Navigation, Autoplay } from "swiper/core";

SwiperCore.use([Navigation, Autoplay]);

const Action = (props) => {
  const { timer } = props;
  const [action, setAction] = useState([]);
  const [actionTime, setActionTime] = useState();

  const getCollection = useCallback(async () => {
    let actionArr = [];
    const response = await getAllProducts();
    response.map((item) => {
      if (item.salePrice) {
        actionArr.push(item);
      }
      return actionArr;
    });
    setAction(actionArr);
  }, [setAction]);

  useEffect(() => {
    getCollection();
  }, []);

  const getActionTime = useCallback(() => {
    if (new Date(timer).getTime() > new Date().getTime()) {
      setActionTime(true);
    } else {
      setActionTime(false);
    }
  }, [timer]);

  // setInterval(getActionTime, 1000);

  useEffect(() => {
    getActionTime();
  }, []);

  return (
    <React.Fragment>
      {action.length !== 0 && actionTime ? (
        <div className={classes.action_block}>
          <div className={classes.action_block__container}>
            <div className={classes.timer}>
              <h2>Flash Sale</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Timer time={timer} />
            </div>
            <div className={classes.action_content}>
              <Swiper
                navigation={true}
                loop={true}
                // autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{
                  clickable: true,
                }}
              >
                {action.map((item, index) => (
                  <SwiperSlide key={index} className="slide-item">
                    <ActionCard key={item.name} item={item} className="action-item"/>
                  </SwiperSlide>
                ))}
                <SwiperSlide style={{ display: "none" }}></SwiperSlide>
              </Swiper>
            </div>
          </div>

          <div className={classes.blur}></div>
        </div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

Action.propTypes = {
  timer: PropTypes.string,
};

export default Action;
