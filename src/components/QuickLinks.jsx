// src/components/QuickLinks.js
import React from "react";
import { Link } from "react-router-dom";

const QuickLinks = () => (
  <div className="grid grid-cols-3 gap-4 my-4">
    <Link to="/canteen-orders" className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
      Canteen Orders
    </Link>
    <Link to="/campus-store" className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
      Campus Store
    </Link>
    <Link to="/rent-buy-materials" className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
      Rent / Buy Materials
    </Link>
  </div>
);

export default QuickLinks;
