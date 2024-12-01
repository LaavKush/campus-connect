import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // For navigation
import "../components/CanteenOrders.css"; // Correct path for CSS

import burger from "../assets/burger.jpg";
import coffee from "../assets/coffee.jpeg";
import friedMomos from "../assets/fried momos.jpeg";
import steamedMomos from "../assets/steamed momos.jpeg";
import pasta from "../assets/pasta.jpeg";
import tea from "../assets/tea.jpeg";
import sandwich from "../assets/sandwich.jpeg";
import patties from "../assets/patties.jpeg";
import paneerKulcha from "../assets/paneer kulcha.jpeg";
import maggie from "../assets/maggie.jpeg";
import planesandwich from "../assets/plane sandwich.jpeg";
import samosa from "../assets/samosa.jpeg";

const items = [
  { name: "Burger", image: burger, cost: "₹50", rate: "per piece" },
  { name: "Coffee", image: coffee, cost: "₹20", rate: "per glass" },
  { name: "Fried Momos", image: friedMomos, cost: "₹80", rate: "per plate" },
  { name: "Steamed Momos", image: steamedMomos, cost: "₹70", rate: "per plate" },
  { name: "Pasta", image: pasta, cost: "₹60", rate: "per plate" },
  { name: "Tea", image: tea, cost: "₹15", rate: "per glass" },
  { name: "Grilled Sandwich", image: sandwich, cost: "₹40", rate: "per piece" },
  { name: "Patties", image: patties, cost: "₹15", rate: "per piece" },
  { name: "Paneer Kulcha", image: paneerKulcha, cost: "₹35", rate: "per piece" },
  { name: "Maggie", image: maggie, cost: "₹45", rate: "per plate" },
  { name: "Plane Sandwich", image: planesandwich, cost: "₹30", rate: "per piece" },
  { name: "Samosa", image: samosa, cost: "₹15", rate: "per piece" },
];

const CanteenOrders = () => {
  const [quantities, setQuantities] = useState(Array(items.length).fill(0));
  const [cart, setCart] = useState([]);
  const navigate = useNavigate(); // Initialize navigate for routing

  const incrementQuantity = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const decrementQuantity = (index) => {
    const newQuantities = [...quantities];
    if (newQuantities[index] > 0) {
      newQuantities[index] -= 1;
      setQuantities(newQuantities);
    }
  };

  const handleBuy = (index) => {
    const quantity = quantities[index];
    if (quantity > 0) {
      const existingItemIndex = cart.findIndex(item => item.name === items[index].name);
      if (existingItemIndex > -1) {
        const newCart = [...cart];
        newCart[existingItemIndex].quantity += quantity;
        setCart(newCart);
      } else {
        setCart([...cart, { ...items[index], quantity }]);
      }

      const newQuantities = [...quantities];
      newQuantities[index] = 0;
      setQuantities(newQuantities);
      alert(`Added ${quantity} of ${items[index].name} to cart.`);
    } else {
      alert("Please select a quantity to buy.");
    }
  };

  const handleRemoveItem = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  return (
    <div className="canteen-orders">
      <h1 className="title">Canteen Orders</h1>
      <p className="subtitle">Place your canteen orders here.</p>
      <div className="items-container">
        {items.map((item, index) => (
          <div className="item-card" key={index}>
            <img src={item.image} alt={`${item.name}`} className="item-image" />
            <h2 className="item-name">{item.name}</h2>
            <p className="item-cost">Cost: {item.cost}</p>
            <p className="item-rate">Rate: {item.rate}</p>
            <div className="quantity-controls">
              <button 
                onClick={() => decrementQuantity(index)} 
                className="button" 
                disabled={quantities[index] === 0}
              >
                -
              </button>
              <span className="quantity">{quantities[index]}</span>
              <button 
                onClick={() => incrementQuantity(index)} 
                className="button plus-button1"
              >
                +
              </button>
              <button
                className="add-to-cart-button1"
                onClick={() => handleBuy(index)}
              >
                Buy
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="cart-summary">
  <h2 className="cart-title">Cart Summary</h2>
  {cart.length > 0 ? (
    <ul className="cart-list">
      {cart.map((cartItem, index) => (
        <li key={index} className="cart-item">
          <div className="item-details">
            <span className="item-name">{cartItem.name} x{cartItem.quantity}</span>
            <span className="item-cost">{cartItem.cost}</span>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent clicking the item from triggering item removal
              handleRemoveItem(index);
            }}
            className="remove-btn"
          >
            Remove
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <p className="empty-cart-message">Your cart is empty.</p>
  )}
  {/* <div className="cart-summary-footer">
    <button className="view-cart-button">View Cart</button>
  </div> */}
</div>


      {/* <div className="button-container1">
        <button className="view-cart-button1" onClick={() => navigate('/canteen-cart')}>
          View Cart
        </button>
      </div> */}

      <div className="cart-buttons1">
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

export default CanteenOrders;
