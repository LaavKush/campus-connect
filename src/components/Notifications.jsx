import React, { useState, useEffect } from 'react';

function Notifications() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    setNotifications([
      { id: 1, message: 'Your pizza order is pending.', date: '2024-11-03' },
      { id: 2, message: 'New item added to campus store.', date: '2024-11-05' },
    ]);
  }, []);

  return (
    <div>
      <h2>Notifications</h2>
      <ul>
        {notifications.map(notification => (
          <li key={notification.id}>
            {notification.message} - {notification.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Notifications;
