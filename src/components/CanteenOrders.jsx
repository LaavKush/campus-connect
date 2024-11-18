import React, { useState, useEffect } from 'react';
import './CanteenOrders.css';

function CanteenOrders() {
  const [orders, setOrders] = useState([]);
  const [menuItems, setMenuItems] = useState([
    { id: 1, item: 'Burger', price: 120, image: '/images/burger.jpg' },
    { id: 2, item: 'Pizza', price: 250, image: '/images/pizza.jpg' },
    { id: 3, item: 'Pasta', price: 150, image: '/images/pasta.jpg' },
    { id: 4, item: 'Fries', price: 60, image: '/images/fries.jpg' },
  ]);

  // Fetch initial order data (simulated)
  useEffect(() => {
    setOrders([
      { id: 1, item: 'Burger', status: 'Delivered', date: '2024-11-01', price: 120 },
      { id: 2, item: 'Pizza', status: 'Pending', date: '2024-11-03', price: 250 },
    ]);
  }, []);

  // Add new order to the list
  const handlePlaceOrder = (menuItem) => {
    setOrders([
      ...orders,
      { ...menuItem, status: 'Pending', date: new Date().toISOString().split('T')[0] },
    ]);
  };

  return (
    <div className="canteen-orders">
      <h2>Canteen Orders</h2>

      {/* Menu Items */}
      <div className="menu-container">
        {menuItems.map((item) => (
          <div key={item.id} className="menu-card">
            <img src={item.image} alt={item.item} className="menu-image" />
            <div className="menu-info">
              <h3>{item.item}</h3>
              <p>Price: ₹{item.price}</p>
              <button
                onClick={() => handlePlaceOrder(item)}
                className="order-button"
              >
                Place Order
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Orders Summary */}
      <h3>Order History</h3>
      <div className="orders-container">
        {orders.map((order) => (
          <div key={order.id} className="order-card">
            <h3>{order.item}</h3>
            <p>Status: {order.status}</p>
            <p>Date: {order.date}</p>
            <p>Price: ₹{order.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CanteenOrders;
