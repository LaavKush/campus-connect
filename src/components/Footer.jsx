import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaStore, FaUtensils, FaBook, FaInfoCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for routing

const Footer = () => (
  <footer className="bg-gray-800 text-white p-6 mx-auto w-full mt-8">
    <div className="flex flex-col md:flex-row justify-between">
      {/* Quick Links */}
      <div className="flex flex-col space-y-1 mb-4 ml-40">
        <h3 className="font-semibold text-lg">Quick Links</h3>
        <Link to="/canteen-orders" className="flex items-center space-x-2 hover:text-green-400">
          <FaUtensils className="text-green-400" />
          <span>Canteen</span>
        </Link>
        <Link to="/campus-store" className="flex items-center space-x-2 hover:text-blue-400">
          <FaStore className="text-blue-400" />
          <span>Campus Store</span>
        </Link>
        <Link to="/rent-buy-materials" className="flex items-center space-x-2 hover:text-yellow-400">
          <FaBook className="text-yellow-400" />
          <span>Rent/Buy Materials</span>
        </Link>
        <Link to="/FAQs" className="flex items-center space-x-2 hover:text-purple-400">
          <FaInfoCircle className="text-purple-400" />
          <span>FAQs</span>
        </Link>
        <Link to="/contact" className="flex items-center space-x-2 hover:text-red-400">
          <FaInfoCircle className="text-red-400" />
          <span>Contact</span>
        </Link>
      </div>

      {/* Social Media */}
      <div className="flex flex-col space-y-1 mb-4">
  <h3 className="font-semibold text-lg">Follow Us</h3>
  <div className="flex items-center space-x-4">
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#1877F2] hover:text-[#165EAA]">
      <FaFacebook />
    </a>
    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#1DA1F2] hover:text-[#1A91DA]">
      <FaTwitter />
    </a>
    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#C13584] hover:text-[#A32B6D]">
      <FaInstagram />
    </a>
  </div>
</div>

      {/* Terms & Policies */}
      <div className="flex flex-col space-y-1 mr-40">
        <h3 className="font-semibold text-lg">Terms & Policies</h3>
        <Link to="/privacy-policy" className="text-sm hover:text-blue-400">Privacy Policy</Link>
        <Link to="/terms-of-service" className="text-sm hover:text-blue-400">Terms of Service</Link>
      </div>
    </div>
  </footer>
);

export default Footer;