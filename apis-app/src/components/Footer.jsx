import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Apis-Mall</h3>
            <p className="text-sm">Your haven for premium honey and bee products.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm">
              <li><Link to="/products" className="hover:text-yellow-400">Our Products</Link></li>
              <li><Link to="/about-us" className="hover:text-yellow-400">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-400">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">IOT</p>
            <p className="text-sm">Phone: (+234) 9037001460</p>
            <p className="text-sm">Email: info@apis-mall.com</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Apis-Mall. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
