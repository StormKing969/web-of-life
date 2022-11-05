import React from 'react'
import { Link } from "react-router-dom";
import ContainerBg from './images/container_bg.jpg'
import PlasticPollution from './images/first.jpg'
import Deforestation from './images/second.jpg'
import Elephant from './images/last.jpg'
import "./Action_Section.scss"

const Action_Section = () => {
  return (
    <div className='action_container'>
        <div className='container_bg'>
            <img src={ContainerBg} alt="elephants" />
        </div>
        <div className='action_section_content'>
            <div className='section_info'>
                <h1>Take Action</h1>
                <p>The greatest challenge for our organization is the indifference that some people tend to feel about the issues that plague our environment. Come and help us make a positive impact. Remember it takes one to light a spark of change!</p>
                <div className='section_link'>
                    <Link to="/contact">Be a force of change</Link>
                </div>
            </div>
            <div className='section_images'>
                <div className='first_img_container'>
                <img src={Deforestation} alt="deforestation" />
                    
                </div>
                <div className='second_img_container'>
                <img src={PlasticPollution} alt="plastic pollution" />
                </div>
                <div className='last_img_container'>
                    <img src={Elephant} alt="elephant" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Action_Section