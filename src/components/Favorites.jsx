import React, { useState, useEffect } from 'react';

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    setFavorites([
      { id: 1, name: 'Pizza', category: 'Canteen' },
      { id: 2, name: 'Notebook', category: 'Store' },
    ]);
  }, []);

  return (
    <div>
      <h2>Favorites</h2>
      <ul>
        {favorites.map(favorite => (
          <li key={favorite.id}>
            {favorite.name} - {favorite.category}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favorites;
