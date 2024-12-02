import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-section text-center">
        <div className="hero-image-container">
          <img
            src={process.env.PUBLIC_URL + '/assets/images/home_page_banner.png'}
            alt="Home Page Banner"
            className="hero-image"
          />
          <div className="hero-overlay"></div> {/* Overlay for shadow effect */}
        </div>
        <div className="hero-text">
          <h1>Discover Your Style</h1>
          <p>Find the latest trends and timeless designs for every occasion.</p>
          <button className="btn btn-primary">Shop Now</button>
        </div>
      </section>

      {/* Featured Products */}
      <div className="container my-5">
        <h2 className="text-center mb-4">Featured Products</h2>
        <div className="row g-4">
          {/* Product Card 1 */}
          <div className="col-md-4">
            <div className="card product-card">
              <img
                src={process.env.PUBLIC_URL + '/assets/images/3.png'}
                className="card-img-top"
                alt="Product 1"
              />
              <div className="card-body">
                <h5 className="card-title">Classic White T-Shirt</h5>
                <p className="card-text">$19.99</p>
                <Link to="/products/1" className="btn w-100">
                  View Details
                </Link>
              </div>
            </div>
          </div>
          {/* Product Card 2 */}
          <div className="col-md-4">
            <div className="card product-card">
              <img
                src={process.env.PUBLIC_URL + '/assets/images/4.png'}
                className="card-img-top"
                alt="Product 2"
              />
              <div className="card-body">
                <h5 className="card-title">Denim Jacket</h5>
                <p className="card-text">$49.99</p>
                <Link to="/products/2" className="btn w-100">
                  View Details
                </Link>
              </div>
            </div>
          </div>
          {/* Product Card 3 */}
          <div className="col-md-4">
            <div className="card product-card">
              <img
                src={process.env.PUBLIC_URL + '/assets/images/5.png'}
                className="card-img-top"
                alt="Product 3"
              />
              <div className="card-body">
                <h5 className="card-title">Summer Dress</h5>
                <p className="card-text">$29.99</p>
                <Link to="/products/3" className="btn w-100">
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
