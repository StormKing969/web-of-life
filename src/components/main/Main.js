import React from 'react'
import Intro from './01_Intro_Section/Intro_Section'
import Mission from './02_Mission_Section/Mission_Section'
import Connect from './03_Connect_Section/Connect_Section'
import Course from './04_Course_Section/Course_Section'
import Action from './05_Action_Section/Action_Section'
import Facts from './06_Facts_Section/Facts_Section'
import Testimonial from './07_Testimonial_Section/Testimonial_Section'
import Footer from '../core/Footer/Footer'

const Main = () => {
  return (
    <div>
        <Intro></Intro>
        <Mission></Mission>
        <Connect></Connect>
        <Course></Course>
        <Action></Action>
        <Facts></Facts>
        <Testimonial></Testimonial>
        <Footer></Footer>
    </div>
  )
}

export default Main