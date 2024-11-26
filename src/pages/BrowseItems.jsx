import React from 'react';
import engineeringMathematics from '../assets/rentbuy/np bali.jpeg';
import fundamentalsOfCpp from '../assets/rentbuy/c++.jpeg';
import engineeringMechanics from '../assets/rentbuy/em.jpeg';
import computerOrganization from '../assets/rentbuy/morris mano.jpeg';
import labCoat from '../assets/rentbuy/coat.jpeg';
import drafter from '../assets/rentbuy/drafter.jpeg';
import sheetHolder from '../assets/rentbuy/sheet holder.jpeg';
import workshopApron from '../assets/rentbuy/apron.jpeg';
import { useCart } from '../context/CartContext'; // Correct import path
import './BrowseItems.css'; // Import CSS for styling

const browseitems = {
  books: [
    {
      id: 1,
      name: 'Engineering Mathematics',
      author: 'N.P. Bali',
      price: 50.0,
      image: engineeringMathematics,
      description: 'A comprehensive guide to engineering mathematics.',
    },
    {
      id: 2,
      name: 'Fundamentals of C++',
      author: 'Balguruswamy',
      price: 45.0,
      image: fundamentalsOfCpp,
      description: 'An essential book for understanding C++ programming.',
    },
    {
      id: 3,
      name: 'Engineering Mechanics',
      author: 'R.C. Hibbeler',
      price: 55.0,
      image: engineeringMechanics,
      description: 'A detailed exploration of engineering mechanics principles.',
    },
    {
      id: 4,
      name: 'Computer Organization',
      author: 'Morris Mano',
      price: 60.0,
      image: computerOrganization,
      description: 'An introduction to computer organization and architecture.',
    },
    {
      id: 5,
      name: 'Lab Coat',
      author: 'N/A',
      price: 20.0,
      image: labCoat,
      description: 'A protective lab coat for experiments.',
    },
    {
      id: 6,
      name: 'Drafter',
      author: 'N/A',
      price: 15.0,
      image: drafter,
      description: 'A drafting tool for precise measurements.',
    },
    {
      id: 7,
      name: 'Sheet Holder',
      author: 'N/A',
      price: 10.0,
      image: sheetHolder,
      description: 'A holder for keeping sheets organized.',
    },
    {
      id: 8,
      name: 'Workshop Apron',
      author: 'N/A',
      price: 25.0,
      image: workshopApron,
      description: 'An apron for protection while working in the workshop.',
    },
  ],
};

const BrowseItems = () => {
  const { addToCart } = useCart();

  return (
    <div className="container">
      <div className="content-container">
        <h1>Browse Items</h1>
        
        {/* Heading for Books */}
        <h2>Books</h2>
        <div className="item-grid">
          {browseitems.books.slice(0, 4).map((item) => (
            <div key={item.id} className="item-card">
              <img src={item.image} alt={item.name} className="item-image" />
              <h3>{item.name}</h3>
              <p>Author: {item.author}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
              <button onClick={() => addToCart(item)}>Rent/Buy</button>
            </div>
          ))}
        </div>

        {/* Heading for Engineering Materials */}
        <h2>Engineering Materials</h2>
        <div className="item-grid">
          {browseitems.books.slice(4).map((item) => (
            <div key={item.id} className="item-card">
              <img src={item.image} alt={item.name} className="item-image" />
              <h3>{item.name}</h3>
              <p>Author: {item.author}</p>
              <p>Price: ${item .price.toFixed(2)}</p>
              <button onClick={() => addToCart(item)}>Rent/Buy</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrowseItems;