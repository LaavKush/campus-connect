import React from 'react';
import { useCart } from '../context/CartContext'; // Ensure the path is correct
import './Cart.css'; // Import the CSS file for styling

const Cart = () => {
  const { cartItems, totalPrice } = useCart();

  // Ensure totalPrice is a valid number
  const formattedTotalPrice = isNaN(Number(totalPrice)) ? 0 : Number(totalPrice);

  // Check if cartItems is empty
  if (cartItems.length === 0) {
    return <div className="empty-cart">Your cart is empty.</div>; // Handle case where cartItems is empty
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
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.price.toFixed(2)}</td>
              <td>{(item.price * item.quantity).toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Cart Total */}
      <div className="cart-total">
        <h2>
          Total: <span className="rupee">R<span className="small">s.</span></span> {formattedTotalPrice.toFixed(2)}
        </h2>
      </div>

      {/* Cart Buttons */}
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
