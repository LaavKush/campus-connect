import React from 'react';
import { Link } from 'react-router-dom';

const TermsPolicies = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Terms & Policies</h1>
      <p className="text-gray-700 mb-4">
        Welcome to our Terms & Policies page. Please review our policies carefully.
      </p>
      <div className="mb-4">
        <Link to="/privacy-policy" className="text-blue-500 hover:underline">Privacy Policy</Link>
      </div>
      <div className="mb-4">
        <Link to="/terms-of-service" className="text-blue-500 hover:underline">Terms of Service</Link>
      </div>
    </div>
  );
};

export default TermsPolicies;