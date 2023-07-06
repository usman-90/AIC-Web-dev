import React from 'react';
import './Slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar,Autoplay, A11y } from 'swiper/modules';
import {CaroselImages} from '../../../../Data/data'


const mainSlider = () => {
  

  return (
    <div>
                <Swiper
                modules={[Autoplay,Navigation, Pagination, Scrollbar, A11y]}
                slidesPerView={1}
                grabCursor={true}
                centeredSlides={true}
                cssMode={true}
                navigation
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                loop={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                  {CaroselImages.map((e,i)=>{
                    return< >
                    <SwiperSlide key={i}><img src={e} alt="pic" className="SliderPic"/></SwiperSlide>
                    </>
                  })}
                </Swiper>
        </div>
  );
};

export default mainSlider;
