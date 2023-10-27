import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import SearchBar from "../SearchBar/SearchBar";
import ImageReel from "../ImageReel/ImageReel";
import Review from "../Review/Review";
import Footer from "../Footer/Footer";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Ford_Escape from "../ImageReel/Ford_Escape.jpg";
import ContactCard from "../ContactCard/ContactCard";
import heroVid from "../../assets/car_deal.mov"

function Home() {
  return (
    <div className="home">
      <span className="hometitle">Discover Your Dream Car With Us</span>

      <div className="home_vid_container">
        <video className="home_vid" src={heroVid} autoPlay muted></video>
      </div>

      <div className="introduction_container">
        <div className="introduction_title">A Decade of Trusted Experience</div>

        <div className="introduction_body">
          Gofer Motors LLC offers an extensive range of top-quality used cars,
          each meticulously inspected and serviced to ensure our customers
          receive the best value for their investment. Our deep-rooted
          commitment to excellence, combined with our rich experience of over 10
          years, makes us the go-to choice for those looking for their next
          vehicle. At Gofer Motors LLC, we don't just sell cars; we sell trust,
          quality, and a lasting relationship.
        </div>
      </div>

      <div className="mid_Body_Container">
        <div className="Right_Car_Title">
          Your Next Adventure Begins with the Right Car
        </div>

        <ImageReel className="inventory_reel" />

        <div>
          <Link to="/appointment" className="scheduleBtn">
            <button className="scheduleBtn">Schedule a Test Drive</button>
          </Link>
        </div>
      </div>

      {/* <div className="search_bar">
        <SearchBar />
      </div> */}


      <div className="reviewAndContact_container">
    <div className="reviews_row">
        <Review />
    </div>
    <div className="Home_contactCard">
        <ContactCard />
    </div>
</div>

      </div>
  );
}

export default Home;
