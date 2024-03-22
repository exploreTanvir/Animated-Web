import React from 'react'
import web from "../../images/img2.e981619f.svg"
import Common from '../Common/Common'


const Home = () => {
  return (
    <div>
      <Common 
      name="Grow your business with" 
      imgSrc={web} 
      visit="/Services" 
      btnName="Get Started"/>
    </div>
  )
}

export default Home