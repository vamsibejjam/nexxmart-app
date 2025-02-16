import React, { useContext, useState, useEffect } from 'react';
import './Checkout.css';
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

const Checkout = () => {
  const { state, dispatch } = useContext(CartContext);

  // Initialize counts with a minimum value of 1 for each product
  const [counts, setCounts] = useState(() => {
    const initialCounts = {};
    state.items.forEach(item => {
      initialCounts[item.name] = item.count || 1;
    });
    return initialCounts;
  });

  const handleCount = (type, productRef) => () => {
    const currentCount = counts[productRef];

    if (type === 'inc') {
      const newCount = currentCount + 1;
      setCounts({ ...counts, [productRef]: newCount });
      dispatch({ type: 'UPDATE_ITEM', item: productRef, count: newCount });
    } else if (type === 'dec' && currentCount > 1) {
      const newCount = currentCount - 1;
      setCounts({ ...counts, [productRef]: newCount });
      dispatch({ type: 'UPDATE_ITEM', item: productRef, count: newCount });
    }
  };

  const getRandomDay = () => Math.floor(Math.random() * 7) + 1;

  return (
    <div className='checkoutCont'>
      <div className="checkout">
        {state.items.length === 0 ? (
          <div className="empty-cart">
            <h2>No items in cart</h2>
            <p>Add items to cart for shopping.</p>
          </div>
        ) : (
          <>
            <div className='checkout_left'>
              {state.items.map(product => (
                <div className="checkout_item" key={product.id}>
                  <div className='item_image'>
                    <img src={product.image} alt={`${product.name}`} />
                  </div>
                  <div className='item_details'>
                    <p className='productTitle'>{product.name}</p>
                    <span>{product.price} <small>{product.discount} off</small></span>
                    <p>Delivery in {getRandomDay()} days, Sun</p>
                  </div>
                  <div className='item_count'>
                    <button className='countbtn' onClick={handleCount('dec', product.name)} aria-label={`Decrease quantity of ${product.name}`}>
                      <strong >-</strong>
                    </button>
                    <input
                      type="text"
                      readOnly
                      style={{ width: "50px", textAlign: "center" }}
                      value={counts[product.name]}
                      className='mr-2'
                    />
                    <button className='countbtn' onClick={handleCount('inc', product.name)} aria-label={`Increase quantity of ${product.name}`}>
                      <strong>+</strong>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="checkout_right">
              <h4>Price Details</h4>
              <div className='rightone'>
                <h6>Price</h6>
                <h6>{state.totalAmount}</h6>
              </div>
              <div className='rightsecond'>
                <h6>Discount</h6>
                <h6>-{state.totalDiscount}</h6>
              </div>
              <div className='rightthird'>
                <h6>Delivery Charges</h6>
                <h6>Free</h6>
              </div>
              <div className='rightfourth'>
                <h6>Total amount</h6>
                <h6>{Math.round(state.totalAmount - state.totalDiscount)}</h6>
              </div>

              <Link to='/payment'>
                <div className="placeButton">
                  <h5>Place Order</h5>
                </div>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Checkout;
