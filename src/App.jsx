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
import StoreCart from "./components/storecart"; 
import CanteenCart from "./components/canteencart";
import { StoreCartProvider2 } from "./context/StoreCartContext";
import { CanteenCartProvider1 } from "./context/CanteenCartContext";
import PrivacyPolicy from "./pages/PrivacyPolicy"; 
import TermsOfService from "./pages/TermsOfService"; 
import TermsPolicies from "./pages/TermsPolicies"; 
import Login from "./pages/login"; 
import Signup from "./pages/Signup"; 
import Chat from "./pages/Chat"; 
import FAQs from "./pages/FAQs";
import ContactUs from "./pages/ContactUs"; 
import Payment from "./pages/Payment";

import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <StoreCartProvider2>
        <CanteenCartProvider1>
          <AppContent 
            isLoggedIn={isLoggedIn} 
            setIsLoggedIn={setIsLoggedIn} 
          />
        </CanteenCartProvider1>
      </StoreCartProvider2>
    </Router>
  );
}

const AppContent = ({ isLoggedIn, setIsLoggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

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
          <Route path="/canteen-cart" element={<CanteenCart />} />
          <Route path="/store-cart" element={<StoreCart />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/terms-policies" element={<TermsPolicies />} />
          <Route path="/chat" element={<Chat />} /> 
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
