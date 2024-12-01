import React, { createContext, useContext, useState, useMemo } from "react";

// Create the context
const CanteenCartContext = createContext();

// Create the provider component
export const CanteenCartProvider1 = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find((cartItem) => cartItem.name === item.name);
      if (existingItem) {
        // Update quantity if item already exists
        return prevItems.map((cartItem) =>
          cartItem.name === item.name
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        // Add new item to cart
        return [...prevItems, { ...item, quantity: item.quantity || 1 }];
      }
    });
  };

  const removeFromCart = (name) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.name !== name));
  };

  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.cost * item.quantity, 0).toFixed(2);
  }, [cartItems]);

  return (
    <CanteenCartContext.Provider value={{ cartItems, totalPrice, addToCart, removeFromCart }}>
      {children}
    </CanteenCartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(CanteenCartContext);
};
