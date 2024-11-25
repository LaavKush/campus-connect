import React, { useState } from 'react';

const SellRentForm = () => {
  const [itemName, setItemName] = useState('');
  const [itemDescription, setItemDescription] = useState('');
  const [itemPrice, setItemPrice] = useState('');
  const [isRenting, setIsRenting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., API call)
    console.log({ itemName, itemDescription, itemPrice, isRenting });
    // Reset form fields
    setItemName('');
    setItemDescription('');
    setItemPrice('');
    setIsRenting(false);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Sell or Rent Your Item</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Item Name:
            <input
              type="text"
              value={itemName}
              onChange={(e) => setItemName(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Description:
            <textarea
              value={itemDescription}
              onChange={(e) => setItemDescription(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Price:
            <input
              type="number"
              value={itemPrice}
              onChange={(e) => setItemPrice(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              checked={isRenting}
              onChange={(e) => setIsRenting(e.target.checked)}
            />
            Renting
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SellRentForm;