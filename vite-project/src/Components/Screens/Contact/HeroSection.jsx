import React from 'react'
import Wrapper from '../../Shared/Wrapper/Wrapper'
import contact from '../../../assets/images/contact.png'
import style from "./contact.module.scss";



const HeroSection = () => {
  return (
    <div className={`main ${style.imgCon}`}>
    <Wrapper>
        <div className="hero">
            <div>
            <h1>Contact Us</h1>
            <p>Feel Free to Connect with us any time..</p>
            <p>We are here for your service..</p>
            </div>
            <img src={contact} className={style.heroPic} alt="pic"/>
        </div>
    </Wrapper>
    </div>
  )
}

export default HeroSection