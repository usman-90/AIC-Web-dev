import React from 'react';
import './Slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Wrapper from '../../../Shared/Wrapper/Wrapper';
import Card from '../../../Shared/Card/card';
import {Sponsors} from '../../../../Data/data'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from '../../../Shared/Button/Button'


const SponsorSlider= () => {
  

  return (
        <Wrapper>
                <div className="mainContainer">
                    <div className="Heading">
                            <h1>Our Sponsors</h1>
                            <div className="Line"></div>
                        </div>
                <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={60}
                slidesPerView={3}
                grabCursor={true}
                centeredSlides={true}
                cssMode={true}
                navigation
                loop={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                  {Sponsors.map((e,i)=>{
                    return<>
                    <SwiperSlide key={i}><Card src={e} flip={false}/></SwiperSlide>
                    </>
                  })}
                </Swiper>
                <NavLink to="contact"><Button text="Become Our Sponsor"/></NavLink>

                </div>

        </Wrapper>
  );
};

export default SponsorSlider;
