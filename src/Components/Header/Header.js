import React, {useContext, useState}from 'react';
import {useNavigate} from 'react-router-dom'
import "./Header.css";
import logo from "./gofer_logo.jpeg";
// import DiscountIcon from "@mui/icons-material/Discount";
import { Link } from "react-router-dom";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { BsFillGeoAltFill } from "react-icons/bs";
import Modal from "../Modal/Modal";
import AuthContext from "../../store/authContext";
import Login from "../Login/Login"


function Header() {
  const { state, dispatch } = useContext(AuthContext);
  const nav = useNavigate();
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };
  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
       
          <img src={logo} className="header_logo" alt="gofer company logo" />
          </Link>

          <Link to="/" style={{ textDecoration: "none" }}>
          <div className="nav_item">
            <span className="header_home">Home</span>
          </div>
      </Link>

      <Link to="/inventory" style={{ textDecoration: "none" }}>
        <div className="nav_item">
          <span className="header_inventory">Inventory</span>
        </div>
      </Link>

      <div className="nav_item" style={{ textDecoration: "none" }}>
        <div className="dropdown">
          <span className="header_financing">Financing</span>

          <div className="dropdown-menu">
            <ul className="header_financing_dropdown">
              <li>
                <a href="#option1">Gofer Motors LLC</a>
              </li>
              <li>
                {" "}
                <a href="#option2">Western Funding</a>
              </li>
              <li>
                <a href="#option3">Lobel Financial</a>
              </li>
              <li>
                <a href="#option4">Westlake</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Link to="/appointment" style={{ textDecoration: "none" }}>
        <div className="nav_item">
          <span className="header_appointment">Request Appointment</span>
        </div>
      </Link>

      <div className="nav_item">
        <div className="dropdown">
          <span className="header_specials">Specials</span>
          {/* <DiscountIcon /> */}
          <div className="dropdown-menu">
            <ul className="header_financing_dropdown">
              <li>
                <a href="#option1">Cash Price</a>
              </li>
              <li>
                <a href="#option2">No Down Payment</a>
              </li>
              <li>
                <a href="#option3">Clearance</a>
              </li>
              <li>
                <a href="#option4">Bonus Cash</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      { state.token ? 
          <button className="nav_item" id='nav_btn' onClick={() => {
            dispatch({type: 'LOGOUT'})
            nav('/');
          }}>Logout</button> :
          <button onClick={openModal} className="nav_item" id='nav_btn' > Login</button>
        }

<span className="header_espanol">Hablamos Español</span>
      <span className="header_goferinfo">
      <BsFillGeoAltFill/> 1703 N Tower Rd Alamo, Texas, United States        <PhoneAndroidIcon className="phoneIcon" fontSize="small" />(956) 258-5021
      </span>
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
          <Login className="nav_item" isOpen={isModalOpen} closeModal={closeModal}/>
        </Modal>
      {/* <Link to="/authentication" style={{ textDecoration: "none" }}>
        <span className="header_login">Login</span>
      </Link> */}
    </div>
  );
}

export default Header;
