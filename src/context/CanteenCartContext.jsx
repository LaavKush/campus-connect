import React, { createContext, useContext, useState, useMemo } from 'react';

// Create the context
const CanteenCartContext = createContext();

// Create the provider component
export const CanteenCartProvider1 = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Burger', quantity: 2, price: 50 },
    { id: 2, name: 'Fried Momos', quantity: 1, price: 80 },
    { id: 3, name: 'Pen', quantity: 2, price: 10 },
  ]);

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  }, [cartItems]);

  return (
    <CanteenCartContext.Provider value={{ cartItems, totalPrice, removeFromCart }}>
      {children}
    </CanteenCartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(CanteenCartContext);
};