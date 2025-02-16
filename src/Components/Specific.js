import React, { useState } from 'react'
import PriceRange from './PriceRange'
import Products from './Products.json'

import Product from './Product'

const Specific = ({ categories, SearchString }) => {
    

    const [productData, SetProductData] = useState(Products)

    const HandleSort = (sortType) => {
        const sortedData = {};
        categories.forEach(category => {
            const sortedProducts = [...productData[category]];
            if (sortType === 'HL') {
                sortedProducts.sort((a, b) => b.price - a.price);
            } else if (sortType === 'LH') {
                sortedProducts.sort((a, b) => a.price - b.price);
            }
            sortedData[category] = sortedProducts;
        });
        SetProductData(prevProductData => ({
            ...prevProductData,
            ...sortedData
        }));
    };


    return (
        <div className='filter  m-2 p-3'>

            <div className="row ">
                <div className="col-lg-3 col-md-12  sidebarLeft ">
                    <div className="sideSection">
                        <h3>Filters</h3>
                        <div className="Price">
                            <PriceRange />
                        </div>

                        <div className="rating">
                            <h6>Customer Ratings</h6>
                            <div className="ratingItem ">
                                <input type="checkbox" name="rating" value="4" id="fiftyPercent" />
                                <label for="fiftyPercent" >4★ & above</label><br />
                            </div>
                            <div className="ratingItem">
                                <input type="checkbox" name="rating" value="3" id="thirtyPercent" />
                                <label for="thirtyPercent">3★ & above</label><br />
                            </div>
                            <div className="ratingItem">
                                <input type="checkbox" name="rating" value="2" id="twentyPercent" />
                                <label for="twentyPercent">2★ & above</label><br />
                            </div>
                            <div className="ratingItem">
                                <input type="checkbox" name="rating" value="1" id="onePercent" />
                                <label for="onePercent">1★ & above</label>
                            </div>
                        </div>

                        <div className="discount">
                            <h6>Discount</h6>
                            <div className="discountItem ">
                                <input type="checkbox" name="rating" value="5" id="fiftyPercent" />
                                <label for="fiftyPercent" >50% Above</label><br />
                            </div>
                            <div className="discountItem ">
                                <input type="checkbox" name="rating" value="4" id="fortyPercent" />
                                <label for="fortyPercent" >40% Above</label><br />
                            </div>
                            <div className="discountItem">
                                <input type="checkbox" name="rating" value="3" id="thirtyPercent" />
                                <label for="thirtyPercent">30% Above</label><br />
                            </div>
                            <div className="discountItem">
                                <input type="checkbox" name="rating" value="2" id="twentyPercent" />
                                <label for="twentyPercent">20% Above</label><br />
                            </div>
                            <div className="discountItem">
                                <input type="checkbox" name="rating" value="1" id="onePercent" />
                                <label for="onePercent">10% Above</label>
                            </div>
                        </div>

                        <div className='availability'>
                            <h6>Availability</h6>
                            <div className="discountItem">
                                <input type="checkbox" name="rating" value="1" id="avail" />
                                <label for="avail">Exclude Out Of Stock</label>
                            </div>
                        </div>

                        <div className="offers">
                            <h6>Offers</h6>
                            <div className="offerItem ">
                                <input type="checkbox" name="rating" value="5" id="fiftyPercent" />
                                <label for="fiftyPercent" >Buy More, Save More</label><br />
                            </div>
                            <div className="offerItem ">
                                <input type="checkbox" name="rating" value="4" id="fortyPercent" />
                                <label for="fortyPercent" >No Cost EMI</label><br />
                            </div>
                            <div className="offerItem">
                                <input type="checkbox" name="rating" value="3" id="thirtyPercent" />
                                <label for="thirtyPercent">Special Price</label><br />
                            </div>
                        </div>

                    </div>
                </div>
                <div className="col-lg-9 col-md-12 sidebarRight">
                    <div className="navSearchLinks">

                        <a >Popularity</a>
                        <a onClick={() => HandleSort('LH')}>Price -- Low to High</a>
                        <a onClick={() => HandleSort('HL')}>Price -- High to Low</a>
                        <a >Newest First</a>
                    </div>


                    {categories.map((category) => (
                        category.toLocaleLowerCase().includes(SearchString.toLocaleLowerCase())
                            ? <Product category={category} data={productData} /> : ''))}

                </div>
            </div>
        </div>
    )
}

export default Specific
