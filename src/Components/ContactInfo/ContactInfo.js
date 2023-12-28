import React from 'react';
import styles from './ContactInfo.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FaWhatsapp} from 'react-icons/fa';
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";



function ContactInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        GOFER MOTORS LLC
        <hr />
        </div> 
        <div className={styles.mail}>
        <CiMail />
        y.gofer@gofermotors.com 
        <br/>
        sales@gofermotors.com
      </div>
      <div className={styles.phone}>
      <FaPhoneAlt />
        (956) 258 - 5021 <br/>
        <FaWhatsapp size={20}/>
        (956) 533 - 8752
      </div>
      <div className={styles.address}>
      <FontAwesomeIcon  icon={faMapMarkerAlt} />
        1703 N Tower Rd Alamo, Texas, United States.
      </div>
      <br/>
      <div className={styles.store_hours_title}>
          STORE HOURS
          <hr />
        </div> 
      <div className={styles.store_hours_container}>
        <div className={styles.days}>
          <div>Monday - Friday</div>
          <div>Saturday</div>
          <div>Sunday</div>
        </div>
        <div className={styles.hours}>
          <div>9:00 AM - 6:00 PM</div>
          <div>9:00 AM - 3:00 PM</div>
          <div>BY APPOINTMENT</div>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;