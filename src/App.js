import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, {useContext, useState}from 'react';

import Header from "./Components/Header/Header";
import Home from "./Components/HomePage/Home";
import Inventory from "./Components/Inventory/Inventory";
import Contact from "./Components/ContactUs/ContactUs"
import Footer from "./Components/Footer/Footer";
import AuthContext from "./store/authContext";

//ICONS
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function App() {
  const { state } = useContext(AuthContext);
  const [isModalOpen, setModalOpen] = useState(false);


  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="App">
      <Header isModalOpen={isModalOpen} setModalOpen={setModalOpen} openModal={openModal}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
