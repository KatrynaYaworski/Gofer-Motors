import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import heroImage from "../../assets/Hero-img.jpg";

function Home() {
  return (
    <div className={styles.home_container}>
      <div className={styles.hero_container}>
        <img
          className={styles.hero_img}
          src={heroImage}
          alt=""
          width={"100%"}
          height={"20%"}
        />
        <div className={styles.overlay}></div>
        <div className={styles.txt_overlay_container}>
          <div className={styles.hero_txt_main}>NEED SOME NEW</div>
          <div className={styles.hero_txt_main}> WHEELS?</div>
          <div className={styles.hero_txt_secondary}>
            View our Large Selection of Quality Used Vehicles.
          </div>
          <Link to="/inventory" style={{ textDecoration: "none" }}>
            <div >
              <button className={styles.hero_btn}>View Inventory</button>
            </div>
          </Link>
        </div>
      </div>

      <div>
        <div>A Decade of Trusted Experience</div>

        <div>
          Gofer Motors LLC offers an extensive range of top-quality used cars,
          each meticulously inspected and serviced to ensure our customers
          receive the best value for their investment. Our deep-rooted
          commitment to excellence, combined with our rich experience of over 10
          years, makes us the go-to choice for those looking for their next
          vehicle. At Gofer Motors LLC, we don't just sell cars; we sell trust,
          quality, and a lasting relationship.
        </div>
      </div>
    </div>
  );
}

export default Home;