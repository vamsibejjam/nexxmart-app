import React, { useContext, useState } from 'react';
import { CartContext } from './CartContext';
import './Payment.css';
import { Link } from 'react-router-dom';
import DoneIcon from '@mui/icons-material/Done';

const Payment = () => {
  
  const [pay, setPay] = useState(false);
  const { state, dispatch } = useContext(CartContext);
  const handlePayed = () => {
    setPay(true);
    dispatch({ type: 'RESET_CART' });
  };

  return (
    <div className='payment'>
      {pay ? (
        <div className='paySucced'>
          <h1>Payment succeed <DoneIcon /></h1>
          <Link to='/'><h6>Return to home</h6></Link>
        </div>
      ) : (
        <>
          <h1 className="payment-title">Payment</h1>

          <div className="addressSection">
            <h3 className="section-title">Delivery address</h3>
            <div className="address">
              <p>vamsi@gmail.com</p>
              <p>6-10-171/A1</p>
              <p>Vemuri street, 522265, Repalle</p>
            </div>
          </div>

          <div className="orderSection">
            <h3 className="section-title">Order Summary</h3>
            <div className="Orders">
              {state.items.map(item => (
                <div className='order-item' key={item.id}>
                  <img src={item.image} width="130px" height="130px" alt="not loaded" />
                  <div className="item-details">
                    <h6>{item.name}</h6>
                    <small><strong>₹{item.price}</strong></small>
                    <span>★{item.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="cardSection">
            <h3 className="section-title">Payment Method</h3>
            <div className="card-details">
              <input type="number" placeholder="Card Number" required />
              <input type="text" placeholder="Card Holder Name" required />
              <input type="text" placeholder="Expiry Date (MM/YY)" required />
              <input type="number" placeholder="CVV" required />
              <button className="pay-button" onClick={handlePayed}>Pay Now</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Payment;
