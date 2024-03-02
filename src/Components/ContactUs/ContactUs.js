import React from "react";
import styles from "./ContactUs.module.css";
import ContactUsCard from "../ContactUsCard/ContactUsCard";
import GoferLocationSection from "../HomePage/GoferLocationSection";

import displayImgOne from "../../assets/contact_us_images/standing-by-car-talking.jpg";
import displayImgTwo from "../../assets/contact_us_images/customer-service-woman-working-on-a-phone-call-2022-09-08-19-20-14-utc.jpg";
import displayImgThree from "../../assets/contact_us_images/test_drive2.jpg";

// import navImage from "../../assets/aboutus.jpg";
import navImage from "../../assets/contact_us_images/joyful-talk-of-the-woman-and-car-showroom-manager-2023-11-27-05-33-28-utc.jpg";

function ContactUs() {
  const customStyle = {
    display: "flex",
    flexDirection: "row-reverse",
    width: "100vw",
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
          height={"150%"}
        />
        <div className={styles.overlay}></div>
        <div className={styles.txt_overlay_container}>
          <h1 className={styles.title}>Contact Us</h1>
        </div>
      </div>

      <div className={styles.location_wrapper}>
        <GoferLocationSection
          detailsContainerStyleProp={detailsContainerCustomStyle}
          lineStyleProp={lineCustomStyle}
          styleProp={customStyle}
          className={styles.contact_info}
        />
      </div>

            <hr />
      <div className={styles.visit_container}>
        <div className={styles.visit_container_left}>
          <div className={styles.visit_title}>
            Visit, make a call, or send us a quick message!
          </div>
          <div className={styles.visit_message}>
            We are committed to providing you with exceptional customer service.
            Need assistance with the purchasing process?
            <br />
            Our dedicated service team is available to help you, whether it's
            through email, phone, or in-person meetings.
            <br />
            Your satisfaction is our priority.
          </div>
        <br />

        <ContactUsCard className={styles.contact_us} />
          </div>

        <div className={styles.visit_container_right}>
          <img
            className={styles.contact_pic}
            height={200}
            width={350}
            src={displayImgOne}
            alt="people talking"
          />
          <img
            className={styles.contact_pic}
            height={200}
            width={350}
            src={displayImgTwo}
            alt="woman working"
          />
          <img
            className={styles.contact_pic}
            height={200}
            width={350}
            src={displayImgThree}
            alt="woman driving"
          />
        </div>
      </div>

      <hr />

      <div className={styles.why_gofer_container}>
        <div className={styles.why_gofer_title}>Why choose Gofer Motors?</div>
        <br />
        <br />

        <div className={styles.why_gofer_subtitle}>
          Wide Variety of Quality Vehicles
        </div>
        <div className={styles.why_gofer_text}>
          Diverse selection of makes and models, each vehicle in our inventory
          guarantees exceptional quality, delivering optimal performance and
          unwavering reliability on every journey.
        </div>
        <br />

        <div className={styles.why_gofer_subtitle}>Convienient Financing</div>
        <div className={styles.why_gofer_text}>
          Multiple financing options are available, allowing us to tailor a
          financing solution specifically to align with your unique needs.
          Whether you prefer flexible terms, competitive interest rates, or a
          customized payment plan, our goal is to provide you with the financial
          flexibility that suits your individual preferences and circumstances.{" "}
        </div>
        <br />

        <div className={styles.why_gofer_subtitle}>
          Exceptional Customer Service
        </div>
        <div className={styles.why_gofer_text}>
          Our sales and service team are knowledgeable, approachable, and
          dedicated to providing exceptional assistance, ensuring that your
          experience with us is not only informed and friendly but also exceeds
          your expectations.{" "}
        </div>
        <br />
      </div>
    </div>
  );
}

export default ContactUs;
