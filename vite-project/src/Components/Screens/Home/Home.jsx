import React from 'react';
import './Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import Wrapper from '../../Shared/Wrapper/Wrapper';
const Home = () => {

  return (
    <section>
        <Wrapper>
                <div className="mainContainer">
                    <div className="Heading">
                            <h1>Our Team</h1>
                            <div className="Line"></div>
                        </div>
                <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                ...
                </Swiper>
                </div>

        </Wrapper>
    </section>
  );
};

export default Home;
