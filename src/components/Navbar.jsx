import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggleSidebar, isOpen, isLoggedIn, toggleLogin }) => {
  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md w-full m-0">
      <div className="flex justify-between items-center max-w-screen-xl mx-auto">
        <h1 className="text-2xl font-bold">Campus Connect</h1>
        <div className="flex items-center space-x-4">
          {/* Sidebar toggle button */}
          <button
            onClick={toggleSidebar}
            className="text-white"
            aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
          >
            {isOpen ? (
              <i className="fas fa-times"></i> // Close icon when open
            ) : (
              <i className="fas fa-bars"></i> // Icon to open the sidebar
            )}
          </button>
          {/* Navigation Links */}
          <Link to="/" className="text-white">
            Home
          </Link>
        
          {/* Conditional rendering for Login/Logout */}
          {isLoggedIn ? (
            <button onClick={toggleLogin} className="text-white">
              Logout
            </button>
          ) : (
            <Link to="/login" className="text-white">
              Login
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;