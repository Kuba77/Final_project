import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import useWindowSize from "../../../hooks/useWindowSize";
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./Carousel.scss";
import SwiperCore, { EffectCoverflow, Navigation, Autoplay } from "swiper/core";

SwiperCore.use([EffectCoverflow, Navigation, Autoplay]);

const Carousel = ({ feature }) => {
  const size = useWindowSize();

  return (
    <Swiper
      navigation={true}
      effect={"coverflow"}
      centeredSlides={true}
      slidesPerView={size < 768 ? 3 : "auto"}
      loop={true}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      coverflowEffect={{
        rotate: 5,
        stretch: 10,
        depth: 300,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{
        clickable: true,
      }}
    >
      {feature.map((item, index) => (
        <SwiperSlide key={index}>
          {item.salePrice && <span className={"feature__item_cover"}></span>}

          <Link to={`/product/${item.itemNo}`}>
            <img src={item.imageUrls[2]} />
            <h4>{item.name}</h4>
          </Link>
        </SwiperSlide>
      ))}
      <SwiperSlide style={{ display: "none" }}></SwiperSlide>
    </Swiper>
  );
};

export default Carousel;
