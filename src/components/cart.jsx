import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import './Cart.css'; // Import the CSS file for styling

const Cart = () => {
  // Sample cart items (this would typically come from state or props)
  const cartItems = [
    { id: 1, name: 'Burger', quantity: 2, price: 5.99 },
    { id: 2, name: 'Fries', quantity: 1, price: 2.99 },
    { id: 3, name: 'Soda', quantity: 3, price: 1.49 },
  ];

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  // Use navigate for routing
  const navigate = useNavigate();

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="cart-items">
            {cartItems.map(item => (
              <li key={item.id} className="cart-item">
                <span>{item.name}</span>
                <span>Quantity: {item.quantity}</span>
                <span>Price: ${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h2>Total: ${totalPrice}</h2>
          </div>
          <div className="cart-buttons">
            <button className="checkout-button" aria-label="Proceed to Checkout">Proceed to Checkout</button>
            <button className="continue-shopping-button" onClick={() => navigate('/')} aria-label="Continue Shopping">Continue Shopping</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;