import React, { useState } from 'react';
import './SellRentForm.css'; // Ensure you have the CSS file for styling

const SellRentForm = () => {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [itemQuantity, setItemQuantity] = useState(1); // State for quantity
  const [isRenting, setIsRenting] = useState(false);
  const [itemImage, setItemImage] = useState(null); // State for image

  const handleImageChange = (e) => {
    setItemImage(e.target.files[0]); // Set the selected image
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    console.log({ itemName, itemDescription, itemPrice, itemQuantity, isRenting, itemImage });
    // Reset form fields
    setItemName('');
    setItemDescription('');
    setItemPrice('');
    setItemQuantity(1);
    setIsRenting(false);
    setItemImage(null);
  };

  return (
    <div className="form-container">
      <h1 className="form-title">Sell or Rent Your Item</h1>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label className="form-label">
            Item Name:
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
              className="form-input"
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Description:
            <textarea
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
              required
              className="form-textarea"
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Price:
            <input
              type="number"
              value={itemPrice}
              onChange={(e) => setItemPrice(e.target.value)}
              required
              className="form-input"
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Quantity:
            <input
              type="number"
              value={itemQuantity}
              onChange={(e) => setItemQuantity(e.target.value)}
              min="1"
              required
              className="form-input"
            />
          </label>
        </div>
        <div className="form-group">
          <label className="form-label">
            Upload Image:
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="form-input"
            />
          </label>
        </div>
        <div className="form-group checkbox-group">
          <label>
            <input
              type="checkbox"
              checked={isRenting}
              onChange={(e) => setIsRenting(e.target.checked)}
              className="form-checkbox"
            />
            Renting
          </label>
        </div>
        <button type="submit" className="form-button">Submit</button>
      </form>
    </div>
  );
};

export default SellRentForm;