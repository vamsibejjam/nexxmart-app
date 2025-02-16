import React from 'react';
import './Appliances.css';
import { Link } from 'react-router-dom';
import Carousel from './Carousel';

const Appliances = () => {
  return (
    <div className='applianceContainer'>
      <div className=" banners">
        <img className='img-fluid' src="https://d1rlzxa98cyc61.cloudfront.net/wysiwyg/pages/May_1200x300_categorybanner_abenson_1_.jpg" alt="Banner 1" />
       </div>

      <div className="appliances">
        <Link to="#">
          <div className="applianceItem">
            <img className='applianceImage' src="https://rukminim2.flixcart.com/image/312/312/xif0q/television/a/b/z/ua43t5450akxxl-samsung-original-imagtew8twpzcfrf.jpeg?q=70" alt="Smart TV" />
            <h6>Smart TV's</h6>
          </div>
        </Link>

        <Link to="#">
          <div className="applianceItem">
            <img className='applianceImage' src="https://rukminim2.flixcart.com/image/312/312/xif0q/refrigerator-new/h/y/t/-original-imagwnjnez3fhghk.jpeg?q=70" alt="Refrigerator" />
            <h6>Refrigerators</h6>
          </div>
        </Link>

        <Link to="#">
          <div className="applianceItem">
            <img className='applianceImage' src="https://im.hunt.in/local/Gallery/3028755/s/3028755_fe2fa.jpg" alt="Air Conditioner" />
            <h6>Air Conditioners</h6>
          </div>
        </Link>

        <Link to="#">
          <div className="applianceItem">
            <img className='applianceImage' src="https://rukminim2.flixcart.com/image/312/312/xif0q/washing-machine-new/q/z/0/-original-imagx7qhkzatqa7z.jpeg?q=70" alt="Washing Machine" />
            <h6>Washing Machines</h6>
          </div>
        </Link>
      </div>

      <div className='washingCarousel'>
        <div className=" carousTitleInfo ">
          <h6>Washing Machines</h6>
          <a href="#" className='text-white'><h6>View All</h6></a>
        </div>
        <Carousel brandType='washingMachine' />
      </div>

      <div className='acCarousel'>
        <div className="carousTitleInfo">
          <h6>Air Conditioners</h6>
          <a href="#" className='text-white'><h6>View All</h6></a>
        </div>
        <Carousel brandType='AC' />
      </div>

      <div className='tvCarousel'>
        <div className="carousTitleInfo">
          <h6>Televisions</h6>
          <a href="#" className='text-white'><h6>View All</h6></a>
        </div>
        <Carousel brandType='smartTv' />
      </div>

      <div className='fridgeCarousel'>
        <div className="carousTitleInfo">
          <h6>Refrigerators</h6>
          <a href="#" className='text-white'><h6>View All</h6></a>
        </div>
        <Carousel brandType='Fridge' />
      </div>
    </div>
  );
}

export default Appliances;
