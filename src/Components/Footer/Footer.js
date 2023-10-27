import React from "react";
import "./Footer.css";
import ContactCard from "../ContactCard/ContactCard";
import SocialIcons from "../SocialIcons/SocialIcons";

function Footer() {
  return (
    <div className="footer_container">
      <div className="footer_phone_email">
        <div className="footer_phone"> (956) 258-5021</div>
        <div className="footer_emails">
            <p className="email1">
          y.gofer@gofermotors.com </p>
          <div className="email2">
          sales@gofermotors.com
          </div>
        </div>
      </div>


      <div className="footer_address">
        {" "}
        1703 N Tower rd , Alamo, TX, United States, Texas{" "}
        <iframe className="footer_map"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28633.888531722707!2d-98.1018341!3d26.2215181!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86659f5b93e0b6d5%3A0x948d328f2ce5f191!2sGofer%20Motors%2C%20LLC!5e0!3m2!1sen!2sus!4v1697062032696!5m2!1sen!2sus" 
                    width="600" 
                    height="450" 
                    style={{ border: "0" }} 
                    allowFullScreen 
                    loading="lazy" 
                    title="Gofer Motors Location" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
      </div>

      <div className="footer_hours_days">
          <p className="footer_days">Monday - Friday</p>
        <p className="footer_hours">9:00am - 6:00pm</p>
          <p className="footer_days" >Saturday</p>
        <p className="footer_hours">9:00am - 3:00pm</p>
          <p className="footer_days">Sunday</p>
        <p className="footer_hours">Closed</p>
      </div>

      <p className="privacy_rights">
        © 2023 Gofer Motors LLC. All rights reserved.
      </p>
      <SocialIcons />
    </div>
  );
}

export default Footer;
