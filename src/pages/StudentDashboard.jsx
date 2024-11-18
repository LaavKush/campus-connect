import React, { useState } from 'react';
import Sidebar from "../components/Sidebar"; // Going up one level to access components

import { Link } from 'react-router-dom';

function Dashboard() {
  // State to control sidebar visibility (optional if using a toggle)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={`dashboard-container ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      {/* Toggle button for the sidebar */}
      <button onClick={toggleSidebar} className="sidebar-toggle">
        {isSidebarOpen ? (
          <i className="fas fa-times"></i> // Close icon
        ) : (
          <i className="fa-solid fa-sidebar"></i> // Open icon
        )}
      </button>

      {/* Sidebar Component */}
      <Sidebar isOpen={isSidebarOpen} />

      <div className="dashboard-content">
        <h1>Welcome to the Dashboard</h1>
        <nav>
          <ul>
            <li><Link to="/canteen-orders">Canteen Orders</Link></li>
            <li><Link to="/campus-store">Campus Store</Link></li>
            <li><Link to="/rent-buy-materials">Rent/Buy Materials</Link></li>
            <li><Link to="/my-orders">My Orders and Requests</Link></li>
            <li><Link to="/notifications">Notifications</Link></li>
            <li><Link to="/favorites">Favorites</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Dashboard;

