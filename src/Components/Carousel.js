import React, { useState, useEffect } from 'react';
import './Carousel.css';
import { Link } from 'react-router-dom';
import Products from './Products.json';

const chunkArray = (array, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }
  return chunks;
};

const getChunkSize = () => {
  const width = window.innerWidth;
  if (width < 768) {
    return 1; // Mobile
  } else if (width < 1024) {
    return 2; // Tablet
  } else {
    return 5; // Laptop and larger screens
  }
};

const Carousel = ({ brandType }) => {
  const [chunkSize, setChunkSize] = useState(getChunkSize());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const handleResize = () => {
      setChunkSize(getChunkSize());
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const BrandProducts = Products[brandType];
    setSlides(chunkArray(BrandProducts, chunkSize));
    setCurrentIndex(0); // Reset index when chunk size changes
  }, [chunkSize, brandType]);

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className='productContainer'>
      <button onClick={prevSlide} className="prevbtn">‹</button>
      <div className="slider" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            {slide.map(product => (
              <Link to={`/productinfo/${product.name}`} key={product.id}>
                <div className="product">
                  <img className='productimage' src={product.image} alt={product.name} />
                  <p className='infoTitle '><small>{product.name}</small></p>
                  <small className='productRating'>4.5 ★</small>
                  <p className='productPrice'><small>{product.price}<span className=' ms-2'>{product.discount}% discount</span></small></p>
                </div>
              </Link>
            ))}
          </div>
        ))}
      </div>
      <button onClick={nextSlide} className="nextbtn">›</button>
    </div>
  );
};

export default Carousel;
