import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const ProductDetails = () => {
  const { id } = useParams(); // Assuming the product ID is passed via the route
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: '',
    comment: '',
  });

  // Mock API fetch for product and related products
  useEffect(() => {
    // Replace with actual API calls
    const fetchProduct = async () => {
      const productData = {
        id,
        name: 'Classic White T-Shirt',
        category: "Men's Clothing",
        price: 19.99,
        description: 'A plain white t-shirt, perfect for casual wear.',
        image: process.env.PUBLIC_URL + '/assets/images/3.png',
      };
      setProduct(productData);
    };

    const fetchRelatedProducts = async () => {
      const related = [
        {
          id: 2,
          name: 'Denim Jacket',
          price: 49.99,
          image: process.env.PUBLIC_URL + '/assets/images/4.png',
        },
        {
          id: 3,
          name: 'Summer Dress',
          price: 29.99,
          image: process.env.PUBLIC_URL + '/assets/images/5.png',
        },
        {
          id: 4,
          name: 'Black Hoodie',
          price: 39.99,
          image: process.env.PUBLIC_URL + '/assets/images/2.png',
        },
      ];
      setRelatedProducts(related);
    };

    const fetchReviews = async () => {
      const reviewData = [
        { name: 'Jane Doe', rating: 5, comment: 'Great quality! Fits perfectly and feels comfortable.', date: 'November 24, 2024' },
        { name: 'John Smith', rating: 4, comment: 'Good product, but the size runs a little small.', date: 'November 22, 2024' },
        { name: 'Mary Johnson', rating: 3, comment: 'Average quality. Expected a bit more for the price.', date: 'November 20, 2024' },
      ];
      setReviews(reviewData);
    };

    fetchProduct();
    fetchRelatedProducts();
    fetchReviews();
  }, [id]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    setReviews((prev) => [...prev, { ...newReview, date: new Date().toLocaleDateString() }]);
    setNewReview({ name: '', rating: '', comment: '' });
  };

  return (
    <div className="container mt-5">
      {/* Breadcrumb */}
      <nav>
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item"><Link to="/shop">Shop</Link></li>
          <li className="breadcrumb-item active" aria-current="page">Product Details</li>
        </ol>
      </nav>

      {/* Product Details */}
      <div className="row g-4 product-details">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h1>{product.name}</h1>
          <p className="text-muted">Category: {product.category}</p>
          <h4 className="text-primary">${product.price?.toFixed(2)}</h4>
          <p>{product.description}</p>
          <form>
            <div className="mb-3">
              <label className="form-label">Size</label>
              <select className="form-select" required>
                <option value="" disabled>Select Size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="x-large">X-Large</option>
              </select>
            </div>
            <div className="mb-3">
              <label className="form-label">Quantity</label>
              <input type="number" className="form-control" defaultValue="1" min="1" max="10" />
            </div>
            <button type="submit" className="btn btn-custom w-100">Add to Cart</button>
          </form>
        </div>
      </div>

      {/* Related Products */}
      <div className="mt-5">
        <h2 className="text-center mb-4">Related Products</h2>
        <div className="row g-4">
          {relatedProducts.map((item) => (
            <div className="col-md-4" key={item.id}>
              <div className="card">
                <img src={item.image} className="card-img-top" alt={item.name} />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="text-muted">${item.price?.toFixed(2)}</p>
                  <Link to={`/products/${item.id}`} className="btn btn-custom w-100">View Details</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="mt-5">
        <h2 className="text-center mb-4">Customer Reviews</h2>
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Leave a Review</h5>
            <form onSubmit={handleReviewSubmit}>
              <div className="mb-3">
                <label className="form-label">Your Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={newReview.name}
                  onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Rating</label>
                <select
                  className="form-select"
                  value={newReview.rating}
                  onChange={(e) => setNewReview({ ...newReview, rating: e.target.value })}
                  required
                >
                  <option value="" disabled>Choose a rating</option>
                  <option value="5">★★★★★ (5)</option>
                  <option value="4">★★★★☆ (4)</option>
                  <option value="3">★★★☆☆ (3)</option>
                  <option value="2">★★☆☆☆ (2)</option>
                  <option value="1">★☆☆☆☆ (1)</option>
                </select>
              </div>
              <div className="mb-3">
                <label className="form-label">Your Comment</label>
                <textarea
                  className="form-control"
                  rows="4"
                  value={newReview.comment}
                  onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                  required
                />
              </div>
              <button type="submit" className="btn btn-custom w-100">Submit Review</button>
            </form>
          </div>
        </div>

        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Recent Reviews</h5>
            {reviews.map((review, index) => (
              <div key={index} className="border-bottom pb-3 mb-3">
                <strong>{review.name}</strong> <span className="text-muted">{"★".repeat(review.rating)}</span>
                <p className="mb-0">{review.comment}</p>
                <small className="text-muted">Posted on {review.date}</small>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
