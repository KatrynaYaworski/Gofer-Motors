import React from "react";
import styles from "./Footer.module.css";
import { FaFacebook, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.footer_line_container}>
        <hr />
      </div>
      <div className={styles.footer_content_container}>
       
        <div className={styles.social_icon_container}>
          <a
            href="https://www.facebook.com/profile.php?id=100094081966775"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className={styles.social_icon} />
          </a>
          <a
            href="https://www.instagram.com/gofermotorsllc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className={styles.social_icon} />
          </a>
        </div>
      </div>
      <div className={styles.footer_credits}>
      <p className={styles.privacy_rights}>
          © 2023 Gofer Motors LLC. All rights reserved.
          
        </p>
        <p>Developed by <a href="https://katrynayaworski.github.io" target="_blank">Katryna Yaworski</a></p>
        </div>
    </div>
  );
}

export default Footer;
