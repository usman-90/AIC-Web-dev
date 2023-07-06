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
const img="data:image/jpeg;base64,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"
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

const { data, isLoading } = useFetchCollection("upcoming");

console.log(data)

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