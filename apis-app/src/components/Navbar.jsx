import React from 'react';
import { Link } from 'react-router-dom';

// Functional component Navbar

const Navbar = () => {
  // Render JSX
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
      <div className="text-xl font-bold">Apis-Mall</div>
      <div className="space-x-4">

        {/* Links created */}
        <Link to="/" className="hover:text-yellow-400 hover:underline">Home</Link>
        <Link to="/products" className="hover:text-yellow-400 hover:underline hover:decoration-custom-gold">Products</Link>
        <Link to="/cart" className="hover:text-yellow-400 hover:underline hover:decoration-custom-gold">Cart</Link>
        <Link to="/vendorlogin" className="hover:text-yellow-400 hover:underline hover:decoration-custom-gold">VendorLogin</Link>
        
      </div>
    </nav>
  );
};

export default Navbar;
