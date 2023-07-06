import React from 'react'
import './events.css'
import events from '../../../assets/images/events.png'
import Wrapper from '../../Shared/Wrapper/Wrapper'


const HeroSection = () => {
  return (
    <div className='main'>
    <Wrapper>
        <div className="hero">
            <div>
            <h1>Our Events</h1>
            <p>Unforgettable Moments, Captivating Experiences: Discover Our Spectacular Events</p>
            </div>
            <img src={events} className="heroPic" alt="pic"/>
        </div>
    </Wrapper>
    </div>
  )
}

export default HeroSection