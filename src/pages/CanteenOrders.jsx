import React, { useState, useEffect } from "react";
import axios from "axios";
import "../components/CanteenOrders.css"; // Correct path for CSS
import { useNavigate } from 'react-router-dom';

const CanteenOrders = () => {
  const [cart, setCart] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Fetch data from API
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get("http://54.169.129.117:8080/api/product/4");
        const formattedItems = response.data.map((item) => ({
          ...item,
          image: item.image_url, // Ensure consistent property for JSX
          cost: `₹${item.price_net}`, // Format price with currency
          rate: item.product_description ? "per piece" : "per plate", // Adjust this as needed
        }));
        setItems(formattedItems);
        setQuantities(new Array(formattedItems.length).fill(0)); // Initialize quantities array
        setLoading(false);
      } catch (err) {
        setError("Failed to load items.");
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  const incrementQuantity = (index) => {
    setQuantities((prev) => {
      const newQuantities = [...prev];
      newQuantities[index] += 1;
      return newQuantities;
    });
  };

  const decrementQuantity = (index) => {
    setQuantities((prev) => {
      const newQuantities = [...prev];
      if (newQuantities[index] > 0) {
        newQuantities[index] -= 1;
      }
      return newQuantities;
    });
  };

  const handleBuy = (index) => {
    const item = items[index];
    const quantity = quantities[index];

    if (quantity > 0) {
      const existingIndex = cart.findIndex((cartItem) => cartItem.id === item.id);
      if (existingIndex !== -1) {
        const updatedCart = [...cart];
        updatedCart[existingIndex].quantity += quantity;
        setCart(updatedCart);
      } else {
        setCart([...cart, { ...item, quantity }]);
      }
      
      // Reset quantity after adding to cart
      setQuantities((prev) => {
        const newQuantities = [...prev];
        newQuantities[index] = 0;
        return newQuantities;
      });
      alert(`Added ${quantity} of ${item.name} to cart.`);
    } else {
      alert("Please select a quantity to buy.");
    }
  };

  const handleRemoveItem = (index) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

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
      </div>

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
