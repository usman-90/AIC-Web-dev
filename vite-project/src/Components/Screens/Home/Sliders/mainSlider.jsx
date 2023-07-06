import React from 'react';
import './Slider.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar,Autoplay, A11y } from 'swiper/modules';
// import {TeamData} from '../../../../Data/data'


const TeamSlider = () => {
  
const TeamData=[
,"https://img.freepik.com/premium-photo/future-artificial-intelligence-robot-cyborg_31965-6980.jpg?w=740",
"https://img.freepik.com/free-vector/ai-futuristic-technology-background_53876-97391.jpg?w=740&t=st=1688658527~exp=1688659127~hmac=fb0e625a1befbeaeb41c57dd118f9106cfd4f2fd1665b39df7265075b9751ae9",
"https://img.freepik.com/free-vector/wireframe-robot-ai-artificial-intelligence-robotic-hand-machine-learning-cyber-mind-domination-concept_127544-852.jpg?w=740&t=st=1688658594~exp=1688659194~hmac=af524ec9cf4ad0faeb5415fec38ee96e76a74bc36a9f0684bb696002f018dd67",
"https://t3.ftcdn.net/jpg/06/09/82/78/240_F_609827880_o0Ws7hftF3KO0c8puKjBoMwipru2hhqJ.jpg",
"https://img.freepik.com/premium-vector/employee-benefits-help-get-best-human-resources-concept-virtual-screen-business-profit-benefit-health-insurance-wireframe-hand-touching-digital-interface-vector-illustration_127544-1968.jpg?w=740",
"https://img.freepik.com/premium-photo/businessman-modern-smart-car-interface_117023-1982.jpg?size=626&ext=jpg&uid=R79900617&ga=GA1.2.1549978492.1688404652&semt=ais"
]
  return (
    <section>
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
                  {TeamData.map((e,i)=>{
                    return<>
                    <SwiperSlide><img src={e} alt="pic" className="SliderPic"/></SwiperSlide>
                    </>
                  })}
                </Swiper>

    </section>
  );
};

export default TeamSlider;
