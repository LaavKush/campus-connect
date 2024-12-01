import React, { createContext, useContext, useState, useMemo } from "react";

// Create the context
const StoreCartContext = createContext();

// Create the provider component
export const StoreCartProvider2 = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Calculate the total price of items in the cart
  const totalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
  }, [cartItems]);

  // Function to add an item to the cart
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

  // Function to remove an item from the cart
  const removeFromCart = (name) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.name !== name));
  };

  // Debugging Logs
  console.log("Cart Items:", cartItems);
  console.log("Total Price:", totalPrice);

  // Provide values to children components
  return (
    <StoreCartContext.Provider value={{ cartItems, totalPrice, addToCart, removeFromCart }}>
      {children}
    </StoreCartContext.Provider>
  );
};

// Custom hook to use the cart context
export const useCart = () => {
  return useContext(StoreCartContext);
};
