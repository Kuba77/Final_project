import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import classes from "./PromotionSlider.module.scss";
import PromotionCard from "../PromotionCard/PromotionCard";
import SwiperCore, { Navigation, Autoplay } from "swiper/core";
import PropTypes from "prop-types";

SwiperCore.use([Navigation, Autoplay]);

const PromotionSlider = (props) => {
  const { promotionData } = props;

  const PromotionArr = promotionData.map((item, index) => {
    return <SwiperSlide key={index} className="promotion-slide">
      <PromotionCard key={item.name} item={item} />
    </SwiperSlide>
  })

  return (
    <React.Fragment>
      <div className={classes.promotion_content}>
        <Swiper
          className="promotion-container"
          centeredSlides={true}
          slidesPerView={"auto"}
          navigation={true}
          loop={true}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
          }}
        >
          {PromotionArr}
        </Swiper>
      </div>
    </React.Fragment>
  );
};

PromotionSlider.propTypes = {
  promotionData: PropTypes.array,
};

export default PromotionSlider;