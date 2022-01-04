import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import classes from "./ActionSlider.module.scss";
import ActionCard from "../ActionCard/ActionCard";
import SwiperCore, { Navigation, Autoplay } from "swiper/core";
import PropTypes from "prop-types";

SwiperCore.use([Navigation, Autoplay]);

const ActionSlider = (props) => {
  const { actionData } = props;

  const ActionArr = actionData.map((item, index) => {
    return <SwiperSlide key={index}>
      <ActionCard key={item.name} item={item} />
    </SwiperSlide>
  })

  return (
    <React.Fragment>
      <div className={classes.action_content}>
        <Swiper
          navigation={true}
          loop={true}
          // autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
          }}
        >
          {ActionArr}
        </Swiper>
      </div>
    </React.Fragment>
  );
};

ActionSlider.propTypes = {
  actionData : PropTypes.array,
};

export default ActionSlider;