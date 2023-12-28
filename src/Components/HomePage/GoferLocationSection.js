import React from "react";
import styles from "../HomePage/GoferLocationSection.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FaWhatsapp } from "react-icons/fa";
import { faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FitScreen } from "@mui/icons-material";

const GoferLocationSection = () => {
  const address = "1703 N Tower Rd, Alamo, TX 78516";
  const phoneNumber = "+9562585021";
  const email = "mailto:y.gofer@gofermotors.com";
  const whatsAppPhone = "9562585021";

  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${whatsAppPhone}?action=call`;

    window.open(whatsappUrl, "_blank");
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };

  const openGoogleMaps = () => {
    const mapsUrl = `https://www.google.com/maps?q=${encodeURIComponent(
      address
    )}`;
    window.location.href = mapsUrl;
  };
  return (
    <div className={styles.wrapper}>
      <iframe
        className={styles.google_map}
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28633.888531722707!2d-98.1018341!3d26.2215181!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86659f5b93e0b6d5%3A0x948d328f2ce5f191!2sGofer%20Motors%2C%20LLC!5e0!3m2!1sen!2sus!4v1697062032696!5m2!1sen!2sus"
        width="50%"
        style={{ border: "0" }}
        allowFullScreen
        loading="lazy"
        title="Gofer Motors Location"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className={styles.overlay}></div>
      <div className={styles.details_container}>
        <h1 className={styles.title}>
          Gofer Motors LLC
          <hr />
        </h1>
        <div className={styles.email_container}>
          <button className={styles.email} onClick={handleEmailClick}>
            <FontAwesomeIcon
              className={styles.email_icon}
              icon={faEnvelope}
              color="rgba(214, 163, 11, 0.816)"
              size="2x"
            />
            y.gofer@gofermotors.com
            <br />
            sales@gofermotors.com
          </button>
        </div>
        <a href={`tel:${phoneNumber}`} className={styles.phone_container}>
          <a href={`tel:${phoneNumber}`} className={styles.phone}>
            <FontAwesomeIcon
              color={"rgba(214, 163, 11, 0.816)"}
              size="2x"
              style={{ transform: "rotate(325deg)" }}
              icon={faMobileAlt}
            />
          </a>
          (956) 258 - 5021
        </a>
        <div onClick={handleWhatsAppClick} className={styles.whatsapp_container}>
          <div className={styles.whatsapp} onClick={handleWhatsAppClick}>
            <FaWhatsapp
              color={"rgba(214, 163, 11, 0.816)"}
              size={35}
              onClick={handleWhatsAppClick}
            />
            
          </div>
          (956) 533 - 8752
        </div>
        <div onClick={openGoogleMaps} className={styles.address_container}>
          <span className={styles.address} onClick={openGoogleMaps}>
            <span>
              <button className={styles.map_button}>
                <FontAwesomeIcon
                  color={"rgba(214, 163, 11, 0.816)"}
                  size="2x"
                  icon={faMapMarkerAlt}
                />{" "}
              </button>
            </span>
            
          </span>
          {address}
        </div>
        <br />
        <h2 className={styles.store_hours_title}>
          STORE HOURS
          <hr />
        </h2>
        <div className={styles.store_hours_container}>
          <div className={styles.days}>
            <div>Monday</div>
            <div>Tuesday</div>
            <div>Wednesday</div>
            <div>Thursday</div>
            <div>Friday</div>
            <div>Saturday</div>
            <div>Sunday</div>
          </div>
          <div className={styles.hours}>
            <div>9:00 AM - 6:00 PM</div>
            <div>9:00 AM - 6:00 PM</div>
            <div>9:00 AM - 6:00 PM</div>
            <div>9:00 AM - 6:00 PM</div>
            <div>9:00 AM - 6:00 PM</div>
            <div>9:00 AM - 3:00 PM</div>
            <div>By Appointment</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GoferLocationSection;
