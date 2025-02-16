import React from 'react'
import { Link } from 'react-router-dom'
import Carousel from './Carousel'
import './Furniture.css'
const Furniture = () => {
  return (
    <div className=' FurnishItems'>
      <div className="homeCarous ">
        <div className=" itemsInfo">
          <h6 >Living room Furnitures</h6>
          <Link to='/'><h6 >View All</h6> </Link>
        </div>
        
        <Carousel brandType='Living-room-furniture'/>
      </div>

      <div className="homeCarous ">
        <div className=" itemsInfo">
          <h6 >Bedroom Furniture</h6>
          <Link to='/'><h6 >View All</h6> </Link>
        </div>
        <Carousel brandType='Bedroom-Furniture'/>
      </div>

      <div className="homeCarous ">
        <div className=" itemsInfo">
          <h6 >Space Saving Furniture</h6>
          <Link to='/'><h6 >View All</h6> </Link>
        </div>
        <Carousel brandType='Space-Saving-Furniture'/>
      </div>

    </div>
  )
}

export default Furniture
