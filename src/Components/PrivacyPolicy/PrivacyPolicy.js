import React from "react";
import styles from "../PrivacyPolicy/PrivacyPolicy.module.css";
import GoferLocationSection from "../HomePage/GoferLocationSection";
import navImage from "../../assets/Hero-img.jpg";

const PrivacyPolicy = () => {
  const customStyle = {
    display: "flex",
    flexDirection: "row-reverse",
    width: "90vw",
  };
  const lineCustomStyle = {
    display: "none",
  };
  const detailsContainerCustomStyle = {
    marginLeft: "0vw",
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.nav_img_container}>
        <img
          className={styles.nav_img}
          src={navImage}
          alt=""
          width={"100%"}
          height={"20%"}
        />
        <div className={styles.overlay}></div>
        <div className={styles.txt_overlay_container}>
          <h1 className={styles.title}>Privacy Policy</h1>
        </div>
      </div>

      <div className={styles.data_wrapper}>
        <p className={styles.date}>Updated: February 2024</p>
        <p className={styles.sub_data}>
          This Privacy Policy outlines the types of personal information we
          collect, how it is used, and the measures we take to safeguard your
          information.
        </p>

        <h2 className={styles.heading}>Information We Collect</h2>

        <h3 className={styles.sub_heading}>Personal Information:</h3>
        <ul className={styles.text}>
          We may collect personal information such as your name, address, email,
          and phone number when you submit inquiries, schedule test drives, or
          communicate with us through our website.
        </ul>

        <h3 className={styles.sub_heading}>Vehicle Information:</h3>
        <ul className={styles.text}>
          In the process of exploring our inventory or expressing interest in a
          vehicle, we may collect details about your preferences and choices.
        </ul>

        <h3 className={styles.sub_heading}>
          Cookies and Tracking Technologies:
        </h3>
        <ul className={styles.text}>
          Our website may use cookies and similar tracking technologies to
          enhance user experience and collect information about your browsing
          activities.
        </ul>

        <h2 className={styles.heading}>How We Use Your Information</h2>

        <h3 className={styles.sub_heading}>Communication:</h3>
        <ul className={styles.text}>
          We may use your contact information to respond to inquiries, provide
          information about our services, and communicate important updates.
        </ul>

        <h3 className={styles.sub_heading}>Vehicle Transactions:</h3>
        <ul className={styles.text}>
          If you decide to purchase a vehicle from us, we will use the provided
          information to facilitate the transaction, including necessary
          paperwork.
        </ul>

        <h3 className={styles.sub_heading}>Marketing and Promotions:</h3>
        <ul className={styles.text}>
          With your consent, we may use your information to send promotional
          materials, newsletters, and updates about our products and services.
        </ul>

        <h2 className={styles.heading}>Information Sharing</h2>
        <ul className={styles.text}>
          We do not sell, trade, or otherwise transfer your personal information
          to third parties without your consent, except as described in this
          Privacy Policy or as required by law.
        </ul>

        <h2 className={styles.heading}>Data Security</h2>
        <ul className={styles.text}>
          We take reasonable measures to protect the confidentiality and
          security of your personal information. However, no method of
          transmission over the internet or electronic storage is completely
          secure.
        </ul>

        <h2 className={styles.heading}>Your Choices</h2>
        <h3 className={styles.privacySubtitle}>You Have The Right To:</h3>
        <ul className={styles.text}>
          Opt out of receiving marketing communications.
        </ul>
        <ul className={styles.text}>
          Access and update your personal information.
        </ul>
        <ul className={styles.text}>
          Request the deletion of your personal information, subject to legal
          obligations.
        </ul>

        <h2 className={styles.heading}>Changes to This Privacy Policy</h2>
        <ul className={styles.text}>
          We may update this Privacy Policy periodically. The latest version
          will be posted on our website with the effective date.
        </ul>

        <h2 className={styles.heading}>Contact Us</h2>
        <ul className={styles.text}>
          If you have any questions or concerns about this Privacy Policy,
          please contact us via telephone or via email.
        </ul>

        <div className={styles.contact_container}>
          <GoferLocationSection
            detailsContainerStyleProp={detailsContainerCustomStyle}
            lineStyleProp={lineCustomStyle}
            styleProp={customStyle}
            className={styles.contact_info}
          />
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
