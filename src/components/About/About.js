import React from 'react'
import Common from '../Common/Common'
import web from "../../images/hero-img.619f0cc8.png"

const About = () => {
  return (
    <div>
      <Common
      name="Welcome to about page" 
      imgSrc={web} 
      visit="/Contact" 
      btnName="Contact Now"
      />
    </div>
  )
}

export default About