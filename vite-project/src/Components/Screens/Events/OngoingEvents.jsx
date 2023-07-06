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



const OngoingEvents = () => {
  
  const TeamData=[
    {
        "title":"Hackathon",
        "img":img,
        "date":"6th May - 8th May",
        "desc":"Veritatis dicta laboriosam dignissimos in modi minima similique! Accusamus odio magnam natus ullam fugit quisquam, ipsa, eum cumque quo totam, unde obcaecati?"
    },
    {
        "title":"Hackathon",
        "img":img,
        "date":"6th May - 8th May",
        "desc":"Veritatis dicta laboriosam dignissimos in modi minima similique! Accusamus odio magnam natus ullam fugit quisquam, ipsa, eum cumque quo totam, unde obcaecati?"
    },
    {
        "title":"Hackathon",
        "img":img,
        "date":"6th May - 8th May",
        "desc":"Accusamus odio magnam natus ullam fugit quisquam, ipsa, eum cumque quo totam, unde obcaecati?"
    },
    {
        "title":"Hackathon",
        "img":img,
        "date":"6th May - 8th May",
        "desc":" Veritatis dicta laboriosam dignissimos in modi minima similique! Accusamus odio magnam natus ullam fugit quisquam, ipsa, eum cumque quo totam, unde obcaecati?"
    },
]
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
                centeredSlides={true}
                cssMode={true}
                navigation
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                  {TeamData.map((e,i)=>{
                    return<>
                    <SwiperSlide key={i}><BlogBox img={e.img} title={e.title} desc={e.desc} date={e.date}/></SwiperSlide>
                    </>
                  })}
                </Swiper>
            
        </div>
    </div>
    </Wrapper>
  )
}

export default OngoingEvents