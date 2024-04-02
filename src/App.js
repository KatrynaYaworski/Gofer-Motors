import "./App.css";
import { Route, Routes } from "react-router-dom";
import React, { useState}from 'react';



import Header from "./Components/Header/Header";
import Home from "./Components/HomePage/Home";
import Inventory from "./Components/Inventory/Inventory";
import Contact from "./Components/ContactUs/ContactUs"
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import Footer from "./Components/Footer/Footer";
import Financing from "./Components/Financing/Financing"
import Login from "./Components/Login/Login";

//ICONS
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function App() {

  const [isModalOpen, setModalOpen] = useState(false);


  const openModal = () => {
    setModalOpen(true);
  };


  
  return (

    <div className="App">
      <Header isModalOpen={isModalOpen} setModalOpen={setModalOpen} openModal={openModal}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacyp" element={<PrivacyPolicy />} />
        <Route key="financing" path="/financing" element={<Financing />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </div>

  );
}

export default App;
