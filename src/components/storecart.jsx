import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/StoreCartContext';
import './Cart.css';

const StoreCart = () => {
  const { cartItems, totalPrice, removeFromCart } = useCart(); // Access the context
  const navigate = useNavigate();

  // Log cartItems to verify they are passed correctly
  console.log(cartItems); // Check if cartItems are present

  // Handle empty cart case
  if (cartItems.length === 0) {
    return <div className="empty-cart">Your cart is empty.</div>;
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>

      {/* Table for Cart Items */}
      <table className="cart-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price (Rs.)</th>
            <th>Total (Rs.)</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.name}> {/* Use 'name' as a unique key */}
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price.toFixed(2)}</td>
              <td>{(item.price * item.quantity).toFixed(2)}</td>
              <td>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.name)} // Correctly calling removeFromCart
                >
                  Remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Cart Total */}
      <div className="cart-total">
        <h2>
          Total: <span className="rupee">R<span className="small">s.</span></span> {totalPrice}
        </h2>
      </div>

      {/* Cart Buttons */}
      <div className="cart-buttons">
        <button
          className="checkout-button"
          onClick={() => navigate('/payment')}
        >
          Buy
        </button>
        <button
          className="continue-shopping-button"
          onClick={() => navigate('/')}
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default StoreCart;
