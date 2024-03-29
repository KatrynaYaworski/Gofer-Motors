import React, { useContext } from "react";
import "./InventoryCard.css";
import AuthContext from "../../../store/authContext";
import axios from "axios";
import soldImage from "../../../assets/sold.png";
import editImage from "../../../assets/edit.png";
import trashImage from "../../../assets/recycle-bin.png";
import { Link } from "react-router-dom";

function InventoryCard({ car, getCars }) {
  const { state } = useContext(AuthContext);

  const carImage = require(`../../../assets/car_images/${car.make}_${car.model}.jpg`);

  const phoneNumber = "+9562585021";
  const handleEditClick = () => {
    // event.stopPropagation();
    console.log("edit button clicked");
    axios
      .put(`http://localhost:4000/car_inventory/${car.car_id}`)
      .then((res) => {
        console.log(res.data);
        getCars();
      });
  };
  const handleDeleteClick = () => {
    // event.stopPropagation();
    console.log("delete button clicked");
    axios
      .delete(`http://localhost:4000/car_inventory/${car.car_id}`)
      .then((res) => {
        console.log(res.data);
        getCars();
      });
  };
  return (
    <div className="car_card">
      <span className="car_image_container">
        {(state.token && state.isadmin === true) || state.isadmin === "true" ? (
          <div className="admin-btn-container">
            <button className="edit-btn">
              <img className="edit-img" src={editImage} alt="" />
            </button>
            <button className="delete-btn" onClick={handleDeleteClick}>
              {" "}
              <img className="trash-img" src={trashImage} alt="" />
            </button>
            <button className="sold-btn" onClick={handleEditClick}>
              <img className="sold-img" src={soldImage} alt="" />
            </button>
          </div>
        ) : (
          ""
        )}

        <img src={carImage} className="carImageCard" alt="car" />
      </span>

      <div className="car_info">
        <span className="car_title">
          {car.year} {car.make} {car.model}
        </span>
        <span className="car_body_type">{car.body_type}</span>
        <span className="car_miles_price_container">
          <span className="car_miles">12,141 mi</span>
          <span className="car_price">${car.sticker_price} Cash Price</span>
          {/* <span className="cash_price"></span> */}
        </span>
        <span>
          <hr />
          <span className="contact_container">
            <a href={`tel:${phoneNumber}`} className="phone-number">
              (956)-258-5021
            </a>

            <Link to="/contact" style={{ textDecoration: "none" }}>
              <div className="interested">Request Info</div>
            </Link>
          </span>
          <hr />
        </span>
        <p className="location">Alamo, TX</p>
      </div>
    </div>
  );
}

export default InventoryCard;
