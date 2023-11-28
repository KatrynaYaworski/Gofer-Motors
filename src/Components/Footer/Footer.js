import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaInstagram } from 'react-icons/fa';


function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_phone_email}>
        <div className={styles.footer_phone}> (956) 258-5021</div>
        <div className={styles.footer_emails}>
            <p className={styles.email1}>
          y.gofer@gofermotors.com </p>
          <div className={styles.email2}>
          sales@gofermotors.com
          </div>
        </div>
      </div>


      <div className={styles.footer_address}>
        {" "}
        1703 N Tower rd , Alamo, TX, United States, Texas{" "}
        
      </div>

      <div className={styles.footer_hours_days}>
          <p className={styles.footer_days}>Monday - Friday</p>
        <p className={styles.footer_hours}>9:00am - 6:00pm</p>
          <p className={styles.footer_days} >Saturday</p>
        <p className={styles.footer_hours}>9:00am - 3:00pm</p>
          <p className={styles.footer_days}>Sunday</p>
        <p className={styles.footer_hours}>Closed</p>
      </div>

      <p className={styles.privacy_rights}>
        © 2023 Gofer Motors LLC. All rights reserved.
      </p>
      <div>
      <a href="https://www.facebook.com/profile.php?id=100094081966775" target="_blank" rel="noopener noreferrer">
        <FaFacebook style={{ fontSize: '2rem', margin: '0 10px', color: "#d6a30bd0" }} />
      </a>
      <a href="https://www.instagram.com/gofermotorsllc/" target="_blank" rel="noopener noreferrer">
        <FaInstagram style={{ fontSize: '2rem', margin: '0 10px', color: "#d6a30bd0"  }} />
      </a>
    </div>
    </div>
  );
}

export default Footer;
