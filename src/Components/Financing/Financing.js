import React from "react";
import styles from "./Financing.module.css";
import customer_shaking_hands from "../../assets/contact_us_images/customer-shaking-hands.jpg";
import standying_by from "../../assets/contact_us_images/standing-by-car-talking.jpg";
import navImage from "../../assets/contact_us_images/customer-shaking-hands.jpg";

const Financing = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.nav_img_container}>
        <img
          className={styles.nav_img}
          src={navImage}
          alt=""
          width={"100%"}
          height={"100%"}
        />
        <div className={styles.overlay}></div>
        <div className={styles.txt_overlay_container}>
          <h1 className={styles.title}>Financing</h1>
        </div>
      </div>
    <main className={styles.main_wrapper}>
      <div className={styles.heading}>
        Welcome to the easiest way to buy your next car
      </div>

      <p className={styles.welcome}>
        At Gofer Motors, we understand that purchasing a vehicle is a
        significant investment. That's why we've partnered with several
        reputable financing companies to provide you with flexible and
        competitive auto financing options. Whether you're looking for a loan
        with a low interest rate, flexible repayment terms, or special financing
        programs, we've got you covered.
      </p>

      <div className={styles.next_vehicle}>Finance your next vehicle</div>

      <div className={styles.inhouse_container}>
        {/* <img
          className={styles.customer_picture}
          src={customer_shaking_hands}
          alt="People Shaking Hands"
        /> */}
        <div className={styles.subtitle}>In-House Financing</div>
        <div className={styles.text}>
          Gofer Motors has financed hundreds of people with our exclusive
          in-house financing model, allowing us to provide flexible options for
          all.
          <div className={styles.terms_apply}>
            *Only a select few vehicles are eligible, subject to potential
            alterations, and conditions may vary.
          </div>
        </div>
      </div>

      <div className={styles.container}>
        {/* <img
          className={styles.customer_picture}
          src={standying_by}
          alt="Men Standing Next to Cars"
        /> */}
        <div className={styles.subtitle}>Auto Financing</div>
        <div className={styles.text}>
          Our financing experts are here to guide you through the process and
          help you find the best financing solution tailored to your needs and
          budget. With our hassle-free financing options, you can get behind the
          wheel of your dream car sooner than you think.
        </div>
      </div>

      <div className={styles.benefits_list}>
        <div className={styles.subtitle_benefits}>
          Benefits of Auto Financing with Gofer Motors:
        </div>
        <ul>
          <li>Competitive interest rates</li>
          <li>Flexible repayment terms</li>
          <li>Quick and easy approval process</li>
          <li>Special financing programs available</li>
          <li>Expert guidance from our financing team</li>
        </ul>
        <div className={styles.credit_text}>
          Whether you have good credit, bad credit, or no credit history at all,
          we're dedicated to helping you secure the financing you need to drive
          away in the perfect vehicle.
        </div>
      </div>

      <div className={styles.subtitle_contact}>
        Contact Us For More Information
      </div>
      </main>
    
    </div>
  );
};

export default Financing;
