import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React, {useContext, useState}from 'react';

import Header from "./Components/Header/Header";
import Home from "./Components/HomePage/Home";
import Review from "./Components/Review/Review";
import Inventory from "./Components/Inventory/Inventory";
import Appointment from "./Components/Appointment/Appointment"
import Footer from "./Components/Footer/Footer";
import Authentication from "./Components/Login/Login"
import AuthContext from "./store/authContext";

//ICONS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
        <Route path="/review" element={<Review />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/appointment" element={<Appointment />} />
        {/* <Route path="/register" element={<Register />} /> */}
        {/* <Route path="/authentication" element={<Authentication />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
