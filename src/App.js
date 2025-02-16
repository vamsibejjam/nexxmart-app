// App.js
import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Electronics from './Components/Electronics';
import Appliances from './Components/Appliances';
import Toys from './Components/Toys';
import Fashion from './Components/Fashion';
import Searched from './Components/Searched';
import Login from './Components/Login';
import Register from './Components/Register';
import Checkout from './Components/Checkout';
import Mobiles from './Components/Mobiles';
import ProductInfo from './Components/ProductInfo';
import Payment from './Components/Payment';
import { ProductProvider } from './ProductContext';
import Furniture from './Components/Furniture';

const App = () => {
  const location = useLocation();

  return (
    <ProductProvider>
      <div className='bg-light'>
        {location.pathname !== '/login' && location.pathname !== '/register' && <Header />}
        <Routes>
          <Route path='/productinfo/:SearchString' element={<ProductInfo />} />
          <Route path='/cart' element={<Checkout />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/' element={<Home />} />
          <Route path='/mobiles' element={<Mobiles />} />
          <Route path='/search/:SearchString' element={<Searched />} />
          <Route path='/electronics' element={<Electronics />} />
          <Route path='/toys' element={<Toys />} />
          <Route path='/fashion' element={<Fashion />} />
          <Route path='/appliances' element={<Appliances />} />
          <Route path='/home-furniture' element={<Furniture />} />
          <Route path='/home-furniture/home-furnishings' element={<Furniture />} />
          <Route path='/home-furniture/furniture-studio' element={<Furniture />} />
          <Route path='/home-furniture/living-room-furniture' element={<Furniture />} />
        </Routes>
      </div>
    </ProductProvider>
  );
};

export default App;
