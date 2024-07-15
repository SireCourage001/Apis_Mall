import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Vendor from './pages/Vendor';
import VendorLogin from './pages/VendorLogin';
import AboutUs from './pages/AboutUs';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="Apis_Mall">
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="cart" element={<Cart />} />
          <Route path="vendor" element={<Vendor />} />
          <Route path="vendor-login" element={<VendorLogin />} /> 
          <Route path="about-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </Router>
    </BrowserRouter>
  </React.StrictMode>
);
