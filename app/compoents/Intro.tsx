import React from 'react'
import { style_h1, style_p } from '../constants'

const Intro = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-10 xl:px-25 gap-5 py-5">
        <h1 className={`${style_h1}`}>Keeping it real with our plant suggestions</h1>
        <span className={`${style_p}`}>Our plant suggestions are rooted in solid ecological research and expert curation. To promote sustainable urban gardens, we recommend ecologically appropriate native species as alternatives to commercial nursery plants.<br></br><br></br>
Namma Thota is your own personal garden planner, which utilises state-of-the-art data about Bengaluru’s ecology, climate and groundwater availability. It matches these factors with your lifestyle and personal preferences, enabling you to design your first sustainable garden or transform your existing one.</span>
      </div>
  )
}

export default Intro
