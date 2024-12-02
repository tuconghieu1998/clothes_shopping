import React from 'react';
import '../styles/Cart.css';

const Footer = () => {
  return (
    <footer className="footer mt-5 bg-dark text-white text-center py-4">
      <div className="container">
        <p className="mb-0">© 2024 ShopClothes. All rights reserved.</p>
        <div>
          <a href="/about" className="text-white me-3">About Us</a>
          <a href="/contact" className="text-white">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
