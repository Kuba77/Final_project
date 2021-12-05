import { Swiper, SwiperSlide} from 'swiper/react'
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./Carousel.scss";
import SwiperCore, {
  EffectCoverflow,
  Navigation,
  Autoplay
} from "swiper/core";

SwiperCore.use([EffectCoverflow, Navigation, Autoplay]);

const Carousel = () => {
  return (
     
      <Swiper
        navigation={true}
        effect={"coverflow"}
        centeredSlides={true}
        slidesPerView={window.innerWidth < 768 ? 3 : "auto"}
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
          clickable: true
        }}
      
      >
        <SwiperSlide>
          <div>
             <img src="https://res.cloudinary.com/dl7xlw7cl/image/upload/v1637705954/hell_ldxazp.jpg" />
            <h4>Manga title</h4>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://res.cloudinary.com/dl7xlw7cl/image/upload/v1637697909/xxxholic_fekubs.jpg"/>
          <h4>Manga title</h4>
        </SwiperSlide>

        <SwiperSlide>
          <img src="https://res.cloudinary.com/dl7xlw7cl/image/upload/v1637602208/Gantz3_oex07v.jpg"/>
          <h4>Manga title</h4>
        </SwiperSlide>
        <SwiperSlide>
        
          <img src="https://res.cloudinary.com/dl7xlw7cl/image/upload/v1637626476/Berserk2_srstgu.jpg"/>
          <h4>Manga title</h4>
        </SwiperSlide>
        <SwiperSlide>
        
        <img src="https://res.cloudinary.com/dl7xlw7cl/image/upload/v1637697890/ShingekinoKyojin2_fdicyy.jpg"/>
        <h4>Manga title</h4>
      </SwiperSlide>
    
      </Swiper>
  );
}


export default Carousel