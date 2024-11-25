import React from 'react';
import { useCart } from '../context/CartContext'; // Ensure the path is correct
import './Cart.css'; // Import the CSS file for styling

const Cart = () => {
  const { cartItems, totalPrice } = useCart();

  // Check if cartItems is empty
  if (cartItems.length === 0) {
    return <div className="empty-cart">Your cart is empty.</div>; // Handle case where cartItems is empty
  }

  return (
    <div className="cart-container">
      <h1 className="cart-title">Your Cart</h1>
      <ul className="cart-items">
        {cartItems.map(item => (
          <li key={item.id} className="cart-item">
            <span>{item.name}</span>
            <span>Quantity: {item.quantity}</span>
            <span>Price: Rs.{item.price.toFixed(2)}</span>
          </li>
        ))}
      </ul>
      <div className="cart-total">
        <h2>
          Total: <span className="rupee">R<span className="small">s.</span></span> {totalPrice}
        </h2>
      </div>
      <div className="cart-buttons">
        <button className="checkout-button">Proceed to Checkout</button>
        <button 
          className="continue-shopping-button" 
          onClick={() => window.location.href='/'} // Redirect to home
        >
          Continue Shopping
        </button>
      </div>
    </div>
  );
};

export default Cart;