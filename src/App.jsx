import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import CanteenOrders from "./pages/CanteenOrders";
import CampusStore from "./pages/CampusStore";
import RentBuyMaterials from './pages/RentBuyMaterials';
import SellRentForm from './pages/SellRentForm';
import BrowseItems from './pages/BrowseItems';
import Notifications from "./components/Notifications";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer";
import Cart from "./components/Cart"; // Ensure the component name is capitalized
import { CartProvider } from "./context/CartContext"; // Importing CartProvider
import PrivacyPolicy from "./pages/PrivacyPolicy"; // Ensure this path is correct
import TermsOfService from "./pages/TermsOfService"; // Ensure this path is correct
import TermsPolicies from "./pages/TermsPolicies"; // Ensure this path is correct
import Login from "./pages/Login"; // Ensure this path is correct
import Signup from "./pages/Signup"; // Ensure this path is correct
import Chat from "./pages/chat"; // Ensure the component name is capitalized
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // State to manage login status

  return (
    <Router>
      <CartProvider> {/* Ensure CartProvider wraps the entire app */}
        <AppContent 
          isLoggedIn={isLoggedIn} 
          setIsLoggedIn={setIsLoggedIn} 
        />
      </CartProvider>
    </Router>
  );
}

const AppContent = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false); // State to track sidebar visibility

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Toggle sidebar visibility
  };

  return (
    <div className="app-container">
      <Navbar 
        toggleSidebar={toggleSidebar} 
        isOpen={isOpen} 
        isLoggedIn={isLoggedIn} 
        setIsLoggedIn={setIsLoggedIn} 
      />
      <div className="main-layout">
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        <Routes>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/canteen-orders" element={<CanteenOrders />} />
          <Route path="/campus-store" element={<CampusStore />} />
          <Route path="/rent-buy-materials" element={<RentBuyMaterials />} />
          <Route path="/sell-rent-form" element={<SellRentForm />} />
          <Route path="/browse-items" element={<BrowseItems />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/terms-policies" element={<TermsPolicies />} />
          <Route path="/chat" element={<Chat />} /> {/* Corrected component name */}
        </Routes>
      </div>
      <Footer /> {/* Footer is included here, so it will show on every page */}
    </div>
  );
}

export default App;