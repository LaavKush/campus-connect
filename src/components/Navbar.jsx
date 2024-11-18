import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="bg-blue-600 text-white p-4 shadow-md w-full m-0">
    <div className="flex justify-between items-center max-w-screen-xl mx-auto">
      <h1 className="text-2xl font-bold">Campus Connect</h1>
      <div className="space-x-4">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        {/* <Link to="/profile">Profile</Link> */}
        <Link to="/login">Login</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;

