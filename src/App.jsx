import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import HomePage from "./pages/HomePage";
import StudentDashboard from "./pages/StudentDashboard";
import CanteenOrders from "./pages/CanteenOrders";
import CampusStore from "./pages/CampusStore";
import RentBuyMaterials from "./pages/RentBuyMaterials";
import MyOrders from "./components/MyOrders";
import Notifications from "./components/Notifications";
import Favorites from "./components/Favorites";
import Footer from "./components/Footer"; // Import Footer component
import "./App.css"; // Import CSS

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="main-layout" style={{ display: "flex" }}>
          {/* Conditionally render Sidebar only on the Dashboard route */}
          {window.location.pathname === "/dashboard" && <Sidebar />}
          <div
            className="content-container"
            style={{
              marginLeft: window.location.pathname === "/dashboard" ? "250px" : "0",
              width: "100%",
            }}
          >
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard" element={<StudentDashboard />} />
              <Route path="/canteen-orders" element={<CanteenOrders />} />
              <Route path="/campus-store" element={<CampusStore />} />
              <Route path="/rent-buy-materials" element={<RentBuyMaterials />} />
              <Route path="/my-orders" element={<MyOrders />} />
              <Route path="/notifications" element={<Notifications />} />
              <Route path="/favorites" element={<Favorites />} />
            </Routes>
          </div>
        </div>
        <Footer /> {/* Add Footer below the content */}
      </div>
    </Router>
  );
}

export default App;
