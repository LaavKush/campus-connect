import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div>
      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button onClick={toggleSidebar} className="close-btn">
          <i className="fas fa-times"></i> {/* Close icon */}
        </button>
        <ul>
          <li><Link to="/canteen-orders">Canteen Orders</Link></li>
          <li><Link to="/campus-store">Campus Store</Link></li>
          <li><Link to="/rent-buy-materials">Rent/Buy Materials</Link></li>
          <li><Link to="/cart">My cart</Link></li>
          {/* <li><Link to="/notifications">Notifications</Link></li>
          <li><Link to="/favorites">Favorites</Link></li> */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;