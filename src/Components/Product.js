import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';


const Product = ({ category, data }) => {
  return (
    <div className="products row">
      {data[category].map((product) => (
        <div className="col-lg-3 col-md-6 col-sm-12" key={product.name}>
          <Link to={`/productinfo/${product.name}`}>
            <div className="productSection">
              <img className="productImage" src={product.image} alt={product.name} />
              <small className='mt-2 productName'>{product.name}</small>
              <p><span>Price: </span>₹ {product.price}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Product;
