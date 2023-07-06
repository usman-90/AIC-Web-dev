import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import React from 'react'
import './OngoingEvents.css'
import Wrapper from '../../Shared/Wrapper/Wrapper'
import BlogBox from '../../Shared/EventBox/EventBox'
import useFetchCollection from '../../Shared/FetchCollection';

const OngoingEvents = () => {

  const { data, isLoading } = useFetchCollection("ongoing");
  

    return (
    <Wrapper>
    <div className="eventSection">
         <div className="Heading">
            <h1>Ongoing Events</h1>
            <div className="Line"></div>
        </div>
        
        <div>
        <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={60}
                slidesPerView={3}
                grabCursor={true}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                >
                  {data.map((e,i)=>{
                    return<>
                    <SwiperSlide key={i}><BlogBox img={e.imageURL} slug={e.id} title={e.name} desc={e.desc} date={e.date}/></SwiperSlide>                                        
                    </>
                  })}
                </Swiper>
            
        </div>
    </div>
    </Wrapper>
  )
}

export default OngoingEvents