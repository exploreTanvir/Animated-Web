import React from 'react'
import { NavLink } from 'react-router-dom'


const Card = (props) => {
  return (
    <>
     <div class='col-md-4 col-10 mx-auto'> 
        <div class="card">
            
          <div className='image'><img src={props.imgSrc} class="card-img-top" alt={props.title}/></div>
            <div class="card-body">
                <h5 class="card-title fw-bold">{props.title}</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <NavLink to="#" class="btn btn-get-started">See More</NavLink>
            </div>
        </div>
    </div>
</>
  )
}

export default Card