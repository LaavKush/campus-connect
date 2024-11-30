import React, { createContext, useContext, useState } from 'react';

// Create the context
const StoreCartContext = createContext();

// Create the provider component
export const StoreCartProvider2 = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Burger', quantity: 2, price: 50 },
    { id: 2, name: 'Fried Momos', quantity: 1, price: 80 },
    { id: 3, name: 'Pen', quantity: 2, price: 10 },
  ]);

  const addItemToCart = (item) => {
    setCartItems((prev) => {
      const existingIndex = prev.findIndex((cartItem) => cartItem.name === item.name);
      if (existingIndex !== -1) {
        const updatedCart = [...prev];
        updatedCart[existingIndex].quantity += item.quantity;
        return updatedCart;
      } else {
        return [...prev, item];
      }
    });
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  ).toFixed(2);

  return (
    <StoreCartContext.Provider value={{ cartItems, totalPrice, addItemToCart }}>
      {children}
    </StoreCartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(StoreCartContext);
};
