import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import Products from './Products.json'
import Carousel from './Carousel'

const Home = () => {


  return (

    <div className='home'>

      <img src="https://mindstacktechnologies.com/wordpress/wp-content/uploads/2018/01/ecommerce-banner.jpg" alt="" />


      <div className="homeSection ">
        <div className=" homeInfo">
          <h5 className=''>Best Of Electronics</h5>
          <Link to='/'>
            <h5 className='mr-3'>View all</h5>
          </Link>

        </div>
        <Carousel brandType="BestOfElectronics" />
      </div>

      <div className="homeSection ">
        <div className=" homeInfo">
          <h5 className=''>Beauty,Food,toys & more</h5>
          <Link to='/'>  <h5 className='mr-3'>View all</h5></Link>
        </div>
        <Carousel brandType="Beauty,Food,Toys & More" />
      </div>

      <div className="homeSection ">
        <div className=" homeInfo">
          <h5 className=''>Sports,healthcare & more</h5>
          <Link to='/'>  <h5 className='mr-3'>View all</h5></Link>
        </div>
        <Carousel brandType="Sports,Healthcare & More" />
      </div>

    </div>
  )
}

export default Home
