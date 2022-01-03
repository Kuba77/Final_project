import React, { useEffect, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { getAllProducts } from "../../services/products";
import classes from "./Action.module.scss";
import Timer from "../Timer/Timer";
import PropTypes from "prop-types";
import ActionCard from "./ActionCard/ActionCard";
import SwiperCore, { Navigation, Autoplay } from "swiper/core";

SwiperCore.use([Navigation, Autoplay]);

// const Action = (props) => {
//   const { timer } = props;
//   const [action, setAction] = useState([]);
//   const [actionTime, setActionTime] = useState();

//   const getCollection = useCallback(async () => {
//     let actionArr = [];
//     const response = await getAllProducts();
//     response.map((item) => {
//       if (item.salePrice) {
//         actionArr.push(item);
//       }
//       return actionArr;
//     });
//     setAction(actionArr);
//   }, [setAction]);

//   useEffect(() => {
//     getCollection();
//   }, []);

//   const getActionTime = useCallback(() => {
//     if (new Date(timer).getTime() > new Date().getTime()) {
//       setActionTime(true);
//     } else {
//       setActionTime(false);
//     }
//   }, [timer]);


//   useEffect(() => {
//     getActionTime();
//   }, []);

//   const ActionArr = action.map((item, index) => (
//     <SwiperSlide key={index}>
//       <ActionCard key={item.name} item={item} />
//     </SwiperSlide>
//   ))



//   // return (
//   //   <React.Fragment>      
//   //     {ActionSlider(action, actionTime, timer)}
//   //   </React.Fragment>
//   // );
// };

// Action.propTypes = {
//   timer: PropTypes.string,
// };

const ActionSlider = (action, actionTime, timer) => {
  const ActionArr = action.map((item, index) => (
    <SwiperSlide key={index}>
      <ActionCard key={item.name} item={item} />
    </SwiperSlide>
  ))

  return (
    action.length !== 0 && actionTime ?
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
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={{
                clickable: true,
              }}
            >
              {ActionArr}
            </Swiper>
          </div>
        </div>

        <div className={classes.blur}></div>

      </div> : ""
  )
}

export default ActionSlider;
