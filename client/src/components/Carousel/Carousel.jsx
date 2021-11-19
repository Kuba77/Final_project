import { Swiper, SwiperSlide} from 'swiper/react'
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./Carousel.scss";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation, Autoplay]);

const Carousel = () => {
  return (
    <div className="carousel-container">
     
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
        loop={true}
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true
        }}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://wallpapercave.com/wp/wp3749197.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.guim.co.uk/img/media/9a19fedf27882429f0287ecf5ea24b0e5c582c3f/0_0_2359_3543/master/2359.jpg?width=700&quality=85&auto=format&fit=max&s=36e63d6a1c5bd5cd7df286ab4fe8d011" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://i.guim.co.uk/img/media/a982a6b00359d9aedc145c4ae69d57f80ef2dde1/0_0_2359_3543/master/2359.jpg?width=700&quality=85&auto=format&fit=max&s=528ebf566699fbdbc52cf8c1e0580df8" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://media1.popsugar-assets.com/files/thumbor/ctYxVnOiLCMRrgyT1Y3W_XSUAP8/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2014/07/30/973/n/1922507/5133ae68c1f43906_thumb_temp_cover_file8453591406756210/i/Harry-Potter-UK-Book-Covers.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/84b51f44052279.580646d92761a.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv-WW2XAAvHD72U_YPsxhQ4R4A3skLDf7Hvcs4tn7FbOtmE1_h53CX9NtgeNQv05GNKxk&usqp=CAU" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}


export default Carousel