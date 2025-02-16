import React, { useContext } from 'react';
import './ProductInfo.css';
import { useNavigate, useParams } from 'react-router-dom';
import Products from './Products.json';
import { CartContext } from './CartContext';

const ProductInfo = () => {
  const navigate = useNavigate();
  const { SearchString } = useParams();
  const { state, dispatch } = useContext(CartContext);

  const allProducts = Object.values(Products).flat();
  const product = allProducts.find(product => product.name.toLowerCase() === SearchString.toLowerCase());

  const addItemToCart = (item) => {
    dispatch({ type: 'ADD_ITEM', payload: item });
    navigate('/cart');
  };

  return (
    <div className='infoContainer'>
      <div className="sectionLeft">
        <img src={product.image} alt={product.name} />
        <button className="addToCartBtn" onClick={() => addItemToCart(product)}>Add to Cart</button>
      </div>
      <div className="sectionRight">
        <div className="Info">
          <h1>{product.name}</h1>
          <p>Price: ₹ {product.price} - {product.discount}% Off</p>
        </div>
        <div className="spec">
          <h3>Specifications</h3>
          <p>When discussing the specifications of a product,
            it is essential to highlight both its technical attributes and practical functionalities.
            Technical specifications usually encompass the core hardware or software features such as processor type,
            memory capacity, storage options, screen resolution, battery life, connectivity options,
            and operating system for electronic devices.
            These details provide a comprehensive overview of what the product is capable of in terms of performance and compatibility.
            For instance, a smartphone might be described as having a 6.5-inch AMOLED display with a resolution of 1080 x 2400 pixels,
            a Snapdragon 888 processor, 8GB of RAM, 128GB of internal storage, a 4500mAh battery,
            5G connectivity, and running on Android 12.</p>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
