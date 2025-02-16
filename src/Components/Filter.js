import React, { useState } from 'react';
import './Filter.css';
import PriceRange from './PriceRange';
import Product from './Product';
import Products from './Products.json';
import SortIcon from '@mui/icons-material/Sort';
import TuneIcon from '@mui/icons-material/Tune';

const Filter = ({ type }) => {
  const [productData, setProductData] = useState(Products);
  const [currentSort, setCurrentSort] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [appliedRatings, setAppliedRatings] = useState([]);
  const [appliedDiscounts, setAppliedDiscounts] = useState([]);
  const [sorted, SetSorted] = useState(false)
  const [sidebar, SetSidebar] = useState(false);

  const handleSidebar = () => {
    SetSidebar(!sidebar)
  }

  const handleSortLink = () => {
    SetSorted(!sorted)
  }

  const handleSort = (sortType) => {

    let sortedProducts = [...productData[type]];

    if (currentSort === sortType) {
      sortedProducts = Products[type];
      setCurrentSort(null);
    } else {
      if (sortType === 'HL') {
        sortedProducts.sort((a, b) => b.price - a.price);
      } else if (sortType === 'LH') {
        sortedProducts.sort((a, b) => a.price - b.price);
      } else if (sortType === 'popularity') {
        sortedProducts.sort((a, b) => b.sales - a.sales);
      } else if (sortType === 'latest') {
        sortedProducts = sortedProducts.filter(product => product.latest);
      }
      setCurrentSort(sortType);
    }

    setProductData({
      ...productData,
      [type]: sortedProducts,
    });
  };

  const handlePriceChange = (values) => {
    setPriceRange(values);
    const filteredProducts = Products[type].filter(
      product => product.price >= values[0] && product.price <= values[1]
    );
    setProductData({
      ...productData,
      [type]: filteredProducts,
    });
  };

  const handleRating = (rating) => {
    const updatedRatings = appliedRatings.includes(rating)
      ? appliedRatings.filter(r => r !== rating)
      : [...appliedRatings, rating];
    console.log('updatedRatings', updatedRatings)
    setAppliedRatings(updatedRatings);

    filterProducts(updatedRatings, appliedDiscounts);
    console.log('appliedRatings', appliedRatings)
  };

  const handleDiscount = (discount) => {
    const updatedDiscounts = appliedDiscounts.includes(discount)
      ? appliedDiscounts.filter(d => d !== discount)
      : [...appliedDiscounts, discount];

    setAppliedDiscounts(updatedDiscounts);
    filterProducts(appliedRatings, updatedDiscounts);
  };

  const filterProducts = (ratings, discounts) => {
    let filteredProducts = Products[type];

    if (ratings.length > 0) {
      filteredProducts = filteredProducts.filter(product =>
        ratings.includes(parseInt(product.rating))
      );
    }

    if (discounts.length > 0) {
      filteredProducts = filteredProducts.filter(product =>
        discounts.some(discount => product.discount >= discount)
      );
    }

    setProductData({ ...productData, [type]: filteredProducts });
  };

  return (
    <div className='filterCont '>
      {sidebar ?
        <div className=" sidebarLeft">
          <div className="sideSection">
            <h3>Filters</h3>
            <div className="Price">
              <PriceRange onPriceChange={handlePriceChange} />
            </div>

            <div className="rating">
              <h6>Customer Ratings</h6>
              <div className="ratingItem">
                <input
                  type="checkbox"
                  onChange={() => handleRating(4)}
                  name="rating"
                  value="4"
                  id="fiftyPercent"
                  checked={appliedRatings.includes(4)}
                />
                <label htmlFor="fiftyPercent">4★ & above</label><br />
              </div>
              <div className="ratingItem">
                <input
                  type="checkbox"
                  onChange={() => handleRating(3)}
                  name="rating"
                  value="3"
                  id="thirtyPercent"
                  checked={appliedRatings.includes(3)}
                />
                <label htmlFor="thirtyPercent">3★ & above</label><br />
              </div>
              <div className="ratingItem">
                <input
                  type="checkbox"
                  onChange={() => handleRating(2)}
                  name="rating"
                  value="2"
                  id="twentyPercent"
                  checked={appliedRatings.includes(2)}
                />
                <label htmlFor="twentyPercent">2★ & above</label><br />
              </div>
              <div className="ratingItem">
                <input
                  type="checkbox"
                  onChange={() => handleRating(1)}
                  name="rating"
                  value="1"
                  id="onePercent"
                  checked={appliedRatings.includes(1)}
                />
                <label htmlFor="onePercent">1★ & above</label>
              </div>
            </div>

            <div className="discount">
              <h6>Discount</h6>
              <div className="discountItem">
                <input
                  type="checkbox"
                  onChange={() => handleDiscount(50)}
                  name="discount"
                  value="50"
                  id="fiftyPercent"
                  checked={appliedDiscounts.includes(50)}
                />
                <label htmlFor="fiftyPercent">50% Above</label><br />
              </div>
              <div className="discountItem">
                <input
                  type="checkbox"
                  onChange={() => handleDiscount(40)}
                  name="discount"
                  value="40"
                  id="fortyPercent"
                  checked={appliedDiscounts.includes(40)}
                />
                <label htmlFor="fortyPercent">40% Above</label><br />
              </div>
              <div className="discountItem">
                <input
                  type="checkbox"
                  onChange={() => handleDiscount(30)}
                  name="discount"
                  value="30"
                  id="thirtyPercent"
                  checked={appliedDiscounts.includes(30)}
                />
                <label htmlFor="thirtyPercent">30% Above</label><br />
              </div>
              <div className="discountItem">
                <input
                  type="checkbox"
                  onChange={() => handleDiscount(20)}
                  name="discount"
                  value="20"
                  id="twentyPercent"
                  checked={appliedDiscounts.includes(20)}
                />
                <label htmlFor="twentyPercent">20% Above</label><br />
              </div>
              <div className="discountItem">
                <input
                  type="checkbox"
                  onChange={() => handleDiscount(10)}
                  name="discount"
                  value="10"
                  id="tenPercent"
                  checked={appliedDiscounts.includes(10)}
                />
                <label htmlFor="tenPercent">10% Above</label>
              </div>
            </div>

            <div className='availability'>
              <h6>Availability</h6>
              <div className="discountItem">
                <input type="checkbox" name="availability" value="1" id="avail" />
                <label htmlFor="avail">Exclude Out Of Stock</label>
              </div>
            </div>

            <div className="offers">
              <h6>Offers</h6>
              <div className="offerItem">
                <input type="checkbox" name="offer" value="buyMoreSaveMore" id="buyMoreSaveMore" />
                <label htmlFor="buyMoreSaveMore">Buy More, Save More</label><br />
              </div>
              <div className="offerItem">
                <input type="checkbox" name="offer" value="noCostEMI" id="noCostEMI" />
                <label htmlFor="noCostEMI">No Cost EMI</label><br />
              </div>
              <div className="offerItem">
                <input type="checkbox" name="offer" value="specialPrice" id="specialPrice" />
                <label htmlFor="specialPrice">Special Price</label><br />
              </div>
            </div>

          </div>
        </div> : <div></div>
      }



      <div className="col-lg-9 col-md-12 sidebarRight">

        <div className="iconCont">
          <div className="tuneIcon" onClick={handleSidebar}>
            <TuneIcon />
          </div>
          <div className="sortIcon" onClick={handleSortLink}>
            <SortIcon />
          </div>

        </div>


        {sorted ? <div className="navSearchLinks">
          <a onClick={() => handleSort('popularity')}>Popularity</a>
          <a onClick={() => handleSort('LH')}>Price -- Low to High</a>
          <a onClick={() => handleSort('HL')}>Price -- High to Low</a>
          <a onClick={() => handleSort('latest')}>Newest First</a>
        </div> : <div></div>
        }


        {type ? (
          <div className='productMatrix'>


            <Product category={type} data={productData} />
          </div>


        ) : (
          <div >
            <p>No items found for search results.</p>
          </div>
        )}


      </div>

    </div>
  );
};

export default Filter;
