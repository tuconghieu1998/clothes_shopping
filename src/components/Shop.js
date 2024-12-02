import React, { useState, useEffect } from 'react';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [maxPrice, setMaxPrice] = useState(100);

  useEffect(() => {
    // Mock API call to fetch products
    const fetchProducts = async () => {
      const productData = [
        { id: 1, name: 'Classic White T-Shirt', category: "Men's Clothing", price: 19.99, size: 'Medium', image: process.env.PUBLIC_URL + '/assets/images/3.png' },
        { id: 2, name: 'Denim Jacket', category: "Men's Clothing", price: 49.99, size: 'Large', image: process.env.PUBLIC_URL + '/assets/images/4.png' },
        { id: 3, name: 'Summer Dress', category: "Women's Clothing", price: 29.99, size: 'Small', image: process.env.PUBLIC_URL + '/assets/images/5.png' },
        { id: 4, name: 'Black Hoodie', category: 'Unisex Clothing', price: 39.99, size: 'X-Large', image: process.env.PUBLIC_URL + '/assets/images/2.png' },
      ];
      setProducts(productData);
      setFilteredProducts(productData);
    };

    fetchProducts();
  }, []);

  const handleFilterChange = () => {
    let filtered = products;

    // Filter by size
    if (selectedSizes.length > 0) {
      filtered = filtered.filter((product) => selectedSizes.includes(product.size));
    }

    // Filter by price
    filtered = filtered.filter((product) => product.price <= maxPrice);

    setFilteredProducts(filtered);
  };

  const toggleSize = (size) => {
    setSelectedSizes((prevSizes) =>
      prevSizes.includes(size) ? prevSizes.filter((s) => s !== size) : [...prevSizes, size]
    );
  };

  const handlePriceChange = (value) => {
    setMaxPrice(value);
  };

  useEffect(() => {
    handleFilterChange();
  }, [products, selectedSizes, maxPrice]);

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Sidebar Filter */}
        <div className="col-md-3">
          <div className="filter-section">
            <h5>Filters</h5>
            {/* Size Filter */}
            <div className="mb-3">
              <h6>Size</h6>
              {['Small', 'Medium', 'Large', 'X-Large'].map((size) => (
                <div className="form-check" key={size}>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value={size}
                    id={`size-${size}`}
                    onChange={() => toggleSize(size)}
                  />
                  <label className="form-check-label" htmlFor={`size-${size}`}>
                    {size}
                  </label>
                </div>
              ))}
            </div>

            {/* Price Filter */}
            <div className="mb-3">
              <h6>Price</h6>
              <input
                type="range"
                className="form-range"
                min="0"
                max="100"
                step="5"
                value={maxPrice}
                onChange={(e) => handlePriceChange(Number(e.target.value))}
              />
              <div className="d-flex justify-content-between">
                <span>$0</span>
                <span>$100</span>
              </div>
              <p>Max Price: ${maxPrice}</p>
            </div>
          </div>
        </div>

        {/* Product List */}
        <div className="col-md-9">
          <div className="row g-4">
            {filteredProducts.map((product) => (
              <div className="col-md-4 product-card" key={product.id}>
                <div className="card">
                  <img src={product.image} className="card-img-top" alt={product.name} />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text text-muted">{product.category}</p>
                    <p className="text-primary">${product.price.toFixed(2)}</p>
                    <button className="btn btn-custom w-100">Add to Cart</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <nav aria-label="Page navigation" className="mt-4">
            <ul className="pagination pagination-custom">
              <li className="page-item">
                <button className="page-link" aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </button>
              </li>
              <li className="page-item"><button className="page-link">1</button></li>
              <li className="page-item"><button className="page-link">2</button></li>
              <li className="page-item"><button className="page-link">3</button></li>
              <li className="page-item">
                <button className="page-link" aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Shop;
