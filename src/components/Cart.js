import React, { useState } from 'react';
import '../styles/Cart.css';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Classic White T-Shirt',
      size: 'Medium',
      price: 19.99,
      quantity: 1,
      image: process.env.PUBLIC_URL + '/assets/images/3.png',
    },
    {
      id: 2,
      name: 'Denim Jacket',
      size: 'Large',
      price: 49.99,
      quantity: 1,
      image: process.env.PUBLIC_URL + '/assets/images/4.png',
    },
    {
      id: 3,
      name: 'Summer Dress',
      size: 'Small',
      price: 29.99,
      quantity: 1,
      image: process.env.PUBLIC_URL + '/assets/images/5.png',
    },
  ]);

  const updateQuantity = (id, quantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateTotal = () => {
    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    return { totalItems, totalPrice };
  };

  const { totalItems, totalPrice } = calculateTotal();

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Your Shopping Cart</h2>

      {/* Cart Items */}
      <div className="row">
        <div className="col-12">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="cart-item d-flex align-items-center justify-content-between p-3 mb-3 border rounded"
            >
              <div className="d-flex align-items-center">
                <img src={item.image} alt={item.name} className="img-fluid me-3" />
                <div>
                  <h5>{item.name}</h5>
                  <p className="text-muted">Size: {item.size}</p>
                </div>
              </div>
              <div className="d-flex align-items-center">
                <span className="me-3">${item.price.toFixed(2)}</span>
                <input
                  type="number"
                  className="form-control me-3"
                  value={item.quantity}
                  min="1"
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value, 10))
                  }
                  style={{ width: '60px' }}
                />
                <button
                  className="btn-remove"
                  onClick={() => removeItem(item.id)}
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Total */}
      <div className="row justify-content-end">
        <div className="col-md-4">
          <div className="cart-total bg-light p-4 rounded">
            <h4 className="mb-4">Cart Total</h4>
            <div className="d-flex justify-content-between">
              <span>Total Items:</span>
              <span>{totalItems}</span>
            </div>
            <div className="d-flex justify-content-between">
              <span>Total Price:</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <button className="btn btn-custom w-100 mt-4">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
