import React from 'react';
import Products from './Products.json';
import Specific from './Specific';
import { useParams } from 'react-router-dom';

const Searched = () => {
  const { SearchString } = useParams();
  const categories = Object.keys(Products).filter(category =>
    category.toLowerCase().includes(SearchString.toLowerCase())
  );

  return (
    <div>
      
      <Specific categories={categories} SearchString={SearchString} />
    </div>
  );
};

export default Searched;
