import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // state to track sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // toggle the visibility
  };

  return (
    <div>
      {/* Button to toggle sidebar */}
      <button onClick={toggleSidebar} className="sidebar-toggle">
        {isOpen ? (
          <i className="fas fa-times"></i> // Close icon when open
          
        ) : (
          <i className="fa-solid fa-sidebar "></i> // icon to open the sidebar
        )}
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <ul>
          <li><Link to="/canteen-orders">Canteen Orders</Link></li>
          <li><Link to="/campus-store">Campus Store</Link></li>
          <li><Link to="/rent-buy-materials">Rent/Buy Materials</Link></li>
          <li><Link to="/my-orders">My Orders and Requests</Link></li>
          <li><Link to="/notifications">Notifications</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
