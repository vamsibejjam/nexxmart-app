import React, { useState } from 'react';
import './PriceRange.css';
import Slider from 'react-slider';

const MIN = 0;
const MAX = 1000;

const PriceRange = ({ onPriceChange }) => {
  const [values, setValues] = useState([MIN, MAX]);

  const handleChange = (newValue) => {
    setValues(newValue);
    if (onPriceChange) {
      onPriceChange(newValue);
    }
  };

  return (
    <div className='container box'>
      <p>Price Range</p>
      <h6>{values[0]} - {values[1]}</h6>
      <Slider className='ranger' onChange={handleChange} value={values} min={MIN} max={MAX} />
    </div>
  );
};

export default PriceRange;
