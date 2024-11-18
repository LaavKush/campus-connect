import React, { useState, useEffect } from 'react';

function CampusStore() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems([
      { id: 1, name: 'Notebook', price: '$5' },
      { id: 2, name: 'Pen', price: '$1' },
    ]);
  }, []);

  return (
    <div>
      <h2>Campus Store</h2>
      <ul>
        {items.map(item => (
          <li key={item.id}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CampusStore;
