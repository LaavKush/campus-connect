import React, { useState, useEffect } from 'react';

function MyOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders([
      { id: 1, item: 'Notebook', type: 'Purchase', status: 'Completed' },
      { id: 2, item: 'Lab Coat', type: 'Rent', status: 'Pending' },
    ]);
  }, []);

  return (
    <div>
      <h2>My Orders and Requests</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            {order.item} - {order.type} - {order.status}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyOrders;
