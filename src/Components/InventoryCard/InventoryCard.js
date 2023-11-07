import React, { useEffect, useContext, useState } from "react";
import "./InventoryCard.css";
import AuthContext from "../../store/authContext";
import axios from "axios";
import { buttonBaseClasses } from "@mui/material";
import soldImage from "../../assets/sold.png"
import editImage from "../../assets/edit.png"

function InventoryCard({ car, getCars }) {
  const { state, dispatch } = useContext(AuthContext);
  
  // console.log(car.make)

  const carImage = require(`../ImageReel/${car.make}_${car.model}.jpg`);
 
  const handleDeleteClick = () => {
    // event.stopPropagation();
    console.log("delete button clicked");
    axios
      .put(`http://localhost:4000/car_inventory/${car.car_id}`)
      .then((res) => {
        console.log(res.data);
        getCars();
      });
  };
  return (
    <div className="car_card">
      <div className="car_info">
        {state.token && state.isadmin === true || state.isadmin === "true" ? (
          <div className="admin-btn-container">
            <button className="edit-btn"><img className="edit-img" src={editImage} alt="" /></button>
            <button className="delete-btn" onClick={handleDeleteClick}><img className="sold-img" src={soldImage} alt="" /></button>
          </div>
        ) : (
          ""
        )}
        <p className="car_title">
          {car.make} {car.model}
        </p>
        <img src={carImage} className="carImageCard" alt="car" />
        <p className="car_make">Make: {car.make}</p>
        <p className="car_model">Model: {car.model}</p>
        <p className="car_price">Price: {car.price}</p>
        <p className="car_year">Year: {car.year}</p>
        <p className="car_downpayment">Down Payment: {car.down_payment}</p>
        <p className="car_description">{car.description}</p>
      </div>
      <button className="interested">Check Availability</button>
    </div>
  );
}

export default InventoryCard;
