// src/context/CartContext.jsx
import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Burger', quantity: 2, price: 50},
    { id: 2, name: 'Fried Momos', quantity: 1, price: 80 },
    { id: 3, name: 'Plane Sandwich', quantity: 3, price: 30 },
  ]);

  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  return (
    <CartContext.Provider value={{ cartItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};