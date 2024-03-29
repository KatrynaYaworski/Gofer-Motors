import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link, useLocation } from "react-router-dom";
import styles from "./ContactUsCard.module.css";
import ReCAPTCHA from "react-google-recaptcha";
import { ErrorMessage } from "formik";

function ContactUsCard() {
  const [carListings, setCarListings] = useState([]);
  const [selectedCar, setSelectedCar] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  const captchaRef = useRef(null);

  const location = useLocation();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    comments: "",
  });

  useEffect(() => {
    axios
      .get("/car_inventory")
      .then((response) => setCarListings(response.data))
      .catch((error) => {
        console.error(
          "Error get request for car inventory:",
          error.response.data
        );
      });
  }, []);

  const handleInputChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const token = captchaRef.current.getValue();
    console.log({ token });
    captchaRef.current.reset();

    axios
      .post("/recaptcha", { token })
      .then(sendMessage)
      .catch(() => console.log("ROBOT"));
  };

  const sendMessage = () => {
    setErrorMessage("");
    setSuccessMessage("");
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.phone ||
      !formData.email ||
      !selectedCar
    ) {
      setErrorMessage("Please fill out all fields");
      return;
    }

    const contactData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      phone: formData.phone,
      email: formData.email,
      comments: formData.comments,
      carId: selectedCar,
    };

    axios
      .post("/contact_information", contactData)
      .then((response) => {
        setFormData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          comments: "",
        });
        setSelectedCar("");

        setSuccessMessage("Your appointment request was sent successfully!");
      })
      .catch((error) => {
        console.error(
          "Error post request to Contact data:",
          error.response.data
        );
        setErrorMessage(
          "Your Message could not be sent. Please try back at another time"
        );
      });
  };

  return (
    <div className={styles.contact_card_container}>
      <form onSubmit={handleSubmit}>
        <input
          className={styles.name}
          placeholder="First Name"
          name="firstName"
          value={formData.firstName}
          onChange={handleInputChange}
        />
        <input
          className={styles.last_name}
          placeholder="Last Name"
          name="lastName"
          value={formData.lastName}
          onChange={handleInputChange}
        />
        <input
          className={styles.phone}
          placeholder="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
        />
        <input
          className={styles.email}
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />

        <select
          value={selectedCar}
          onChange={(e) => setSelectedCar(e.target.value)}
        >
          <option value="">Select a car</option>
          {carListings.map((car) => (
            <option key={car.car_id} value={car.car_id}>
              {car.make} {car.model} ({car.year})
            </option>
          ))}
        </select>
        <textarea
          className={styles.comments}
          placeholder="Comments"
          name="comments"
          value={formData.comments}
          onChange={handleInputChange}
        />

        <ReCAPTCHA
          sitekey={process.env.REACT_APP_RECAPTCHA_SITE_KEY}
          ref={captchaRef}
        ></ReCAPTCHA>

        <span className={styles.data_clause}>
          By submitting my contact information I give permission for Gofer
          Motors to contact me using the phone number or email I provide. This
          includes text messages to my mobile phone or communications made
          through an autodialer or prerecorded messages. I acknowledge and agree
          that this serves as my explicit consent to receive such
          communications. Additionally, I have reviewed and accepted Gofer
          Motors'{" "}
          <Link to="/privacyp" style={{ textDecoration: "none" }}>
            <span
              className={`${styles.privacyp_link} ${
                location.pathname === "/privacyp" ? styles.active : ""
              }`}
            >
              Privacy Policy
            </span>
          </Link>
          .
        </span>
        {successMessage && (
          <p className={styles.success_message}>{successMessage}</p>
        )}
        {ErrorMessage && <p className={styles.error_message}>{errorMessage}</p>}
        <div className={styles.send_btn_container}>
          <button className={styles.send_btn}>Send Message</button>
        </div>
      </form>
    </div>
  );
}

export default ContactUsCard;
