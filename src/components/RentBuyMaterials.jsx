import React, { useState, useEffect } from 'react';

function RentBuyMaterials() {
  const [materials, setMaterials] = useState([]);

  useEffect(() => {
    setMaterials([
      { id: 1, name: 'Lab Coat', type: 'Rent', price: '$3/day' },
      { id: 2, name: 'Drafting Set', type: 'Buy', price: '$20' },
    ]);
  }, []);

  return (
    <div>
      <h2>Rent/Buy Materials</h2>
      <ul>
        {materials.map(material => (
          <li key={material.id}>
            {material.name} - {material.type} - {material.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RentBuyMaterials;
