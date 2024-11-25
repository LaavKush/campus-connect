// src/pages/RentBuyMaterials.js
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for routing
import "./RentBuyMaterials.css"; // Import CSS for styling

const RentBuyMaterials = () => {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="rent-buy-materials-container">
      <h1 className="text-2xl font-bold">Rent/Buy Materials</h1>
      <p>Select an option below to proceed:</p>
      <div className="options">
        <button
          className="option-button"
          onClick={() => navigate('/sell-rent-form')} // Navigate to SellRentForm
        >
          Sell or Rent Your Items
        </button>
        <button
          className="option-button"
          onClick={() => navigate('/browse-items')} // Navigate to BrowseItems
        >
          Browse Items for Rent or Sale
        </button>
      </div>
    </div>
  );
};

export default RentBuyMaterials;