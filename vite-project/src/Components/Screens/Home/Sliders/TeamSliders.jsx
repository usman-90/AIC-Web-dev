import React,{useState} from 'react';
import './Slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Wrapper from '../../../Shared/Wrapper/Wrapper';
import Card from '../../../Shared/Card/card';
import {TeamData} from '../../../../Data/data'
import { NavLink, } from 'react-router-dom'
import Button from '../../../Shared/Button/Button'


const TeamSlider = () => {
  return(

    <Wrapper>
                <div className="mainContainer">
                    <div className="Heading">
                            <h1>Our Team</h1>
                            <div className="Line"></div>
                        </div>
                <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={60}
                slidesPerView={1}
                grabCursor={true}
                centeredSlides={true}
                cssMode={true}
                navigation
                breakpoints={{
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 2,
                    spaceBetween: 40,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 50,
                  },
                }}
               
                loop={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                  {TeamData.map((e,i)=>{
                    return<>
                    <SwiperSlide key={i}><Card key={i} src={e.img} role={e.role} name={e.name} desc={e.desc} /></SwiperSlide>
                    </>
                  })}
                </Swiper>
                <NavLink to="/contact"><Button text="Join Us"/></NavLink>
                </div>

        </Wrapper>
)
};

export default TeamSlider;
