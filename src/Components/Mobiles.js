import React from 'react';
import Carousel from '../Components/Carousel';
import './Mobiles.css';
import { Link } from 'react-router-dom';

const Mobiles = () => {
  return (
    <div className="mobileCont">
      <h2 className='text-center'>Shop Mobile Now</h2>

         
          <img className='bannerImg'  src="https://ohmobiletech.com/wp-content/uploads/2024/04/banner.jpg" alt="img not loaded" />
      

     
        <div className="mobileCarousel">
          <div className="mobileTitleInfo">
            <h6 >Vivo Mobiles</h6>
            <Link to='/mobiles'><h6 >VIEW ALL</h6></Link>
          </div>

          <Carousel brandType="vivo" />

        </div>

        <div className="mobileCarousel">
          <div className="mobileTitleInfo">
            <h6 >Samsung Mobiles</h6>
            <Link to='/mobiles'><h6 >VIEW ALL</h6></Link>
          </div>

          <Carousel brandType="samsung" />

        </div>

        <div className="mobileCarousel">
          <div className="mobileTitleInfo">
            <h6 >Realme Mobiles</h6>
            <Link to='/mobiles'><h6 >VIEW ALL</h6></Link>
          </div>

          <Carousel brandType="realme" />

        </div>

        <div className="mobileCarousel">
          <div className="mobileTitleInfo">
            <h6 >Iphone Mobiles</h6>
            <Link to='/mobiles'><h6 >VIEW ALL</h6></Link>
          </div>

          <Carousel brandType="Iphone" />

        </div>
    
    </div>
  );
};

export default Mobiles;
