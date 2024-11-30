import React, { createContext, useContext, useState } from "react";

const CanteenCartContext = createContext();

export const CanteenCartProvider1 = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Burger", quantity: 2, price: 50 },
    { id: 2, name: "Fried Momos", quantity: 1, price: 80 },
    { id: 3, name: "Pen", quantity: 2, price: 10 },
  ]);

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  ).toFixed(2);

  return (
    <CanteenCartContext.Provider value={{ cartItems, totalPrice }}>
      {children}
    </CanteenCartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CanteenCartContext);
};
