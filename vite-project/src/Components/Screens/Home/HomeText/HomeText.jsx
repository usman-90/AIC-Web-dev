import React from 'react'
import Wrapper from '../../../Shared/Wrapper/Wrapper'
import Button from '../../../Shared/Button/Button'
import './HomeText.css'
import { NavLink, useNavigate } from 'react-router-dom'
const HomeText = () => {
  const navigate=useNavigate();
  
  return (
    <Wrapper>
    <div className='textBox'>
        <h1>
            What is RCAI?
        </h1>
        <p>
        Research Center for Artificial Intelligence (RCAI), is an initiative towards creating research-based environment, producing professionals and high-quality engineers in the field of Information & Communication Technologies (ICT) and creating ways to step in the field of innovative and cost-effective product design.
        </p>
        <p>
        The team has worked on variety of IoT related projects which includes smart irrigation, food quality inspection, smart home concept, automatic secure entrance system, smart health care system. The lab has also worked on other projects related to different technologies like satellite communication, speech processing, and image processing.
        </p>
        <NavLink to="about"><Button text="Learn More" onClick={()=>{navigate("/about")}}/></NavLink>
    </div>
    </Wrapper>
  )
}

export default HomeText