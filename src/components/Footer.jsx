import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaStore, FaUtensils, FaBook, FaInfoCircle } from 'react-icons/fa';

const Footer = () => (
  <footer className="bg-gray-800 text-white p-6 w-full mt-8">
    <div className="container mx-auto flex flex-col md:flex-row justify-between gap-8">
      {/* Quick Links */}
      <div className="flex flex-col space-y-2">
        <h3 className="font-semibold text-lg">Quick Links</h3>
        <div className="flex items-center space-x-2">
          <FaUtensils className="text-green-400" />
          <span>Canteen</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaStore className="text-blue-400" />
          <span>Campus Store</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaBook className="text-yellow-400" />
          <span>Rent/Buy Materials</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaInfoCircle className="text-purple-400" />
          <span>FAQ</span>
        </div>
        <div className="flex items-center space-x-2">
          <FaInfoCircle className="text-red-400" />
          <span>Contact</span>
        </div>
      </div>

      {/* Social Media */}
      <div className="flex flex-col space-y-2">
        <h3 className="font-semibold text-lg">Follow Us</h3>
        <div className="flex items-center space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaFacebook className="text-blue-600 hover:text-blue-400" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
            <FaTwitter className="text-blue-400 hover:text-blue-300" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram className="text-pink-500 hover:text-pink-400" />
          </a>
        </div>
      </div>

      {/* Terms & Policies */}
      <div className="flex flex-col space-y-2">
        <h3 className="font-semibold text-lg">Terms & Policies</h3>
        <div className="text-sm">Privacy Policy</div>
        <div className="text-sm">Terms of Service</div>
      </div>
    </div>
  </footer>
);

export default Footer;
