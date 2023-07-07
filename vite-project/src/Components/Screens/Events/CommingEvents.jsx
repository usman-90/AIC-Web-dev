import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import './OngoingEvents.css'
import Wrapper from '../../Shared/Wrapper/Wrapper'
import BlogBox from '../../Shared/EventBox/EventBox'
import useFetchCollection from '../../Shared/FetchCollection';
import spinnerImg from '../../../assets/images/spinner.jpg'


const ComingEvents = () => {
  
  const { data, isLoading } = useFetchCollection("upcoming");

    return (
    <Wrapper>
    <div className="eventSection">
         <div className="Heading">
            <h1>Coming Events</h1>
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
                onSlideChange={() => console.log('slide change')}
                >
<<<<<<< HEAD
                  {data.length === 0 ? 
                  isLoading && (
                    <div className="loading-container">
                       <img
                          src={spinnerImg}
                        />
                    </div>
                  ) :
                  data.map((e,i)=>{
                    return<>
                    <SwiperSlide key={i}><BlogBox img={e.imageURL} slug={e.id} title={e.name} desc={e.desc} startDate={e.startDate} endDate={e.endDate}/></SwiperSlide>                                        
                    </>
                  })
                }
=======
                  {data.map((e,i)=>{
                    return<SwiperSlide key={i}><BlogBox img={e.imageURL} slug={e.id} title={e.name} desc={e.desc} StartDate={e.startDate} EndDate={e.endDate}/></SwiperSlide>
                    
                  })}
>>>>>>> 34e8d378c3185fb0e1801a3cd4cc8cb26b48fc1e
                </Swiper>
            
        </div>
    </div>
    </Wrapper>
  )
}

export default ComingEvents