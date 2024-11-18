// src/pages/HomePage.js
import React from "react";
import QuickLinks from "../components/QuickLinks";
import Announcements from "../components/Announcements";
import SearchBar from "../components/SearchBar";
import banner from "../assets/banner.png";

const HomePage = () => (
  <div>
    {/* <SearchBar /> */}
    <img src={banner} alt="Banner" style={{ width: "100%", height: "auto" }} /> {/* Banner image */}
    <QuickLinks />
    {/* <Announcements /> */}
  </div>
);

export default HomePage;
