import React, { useState, useEffect } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";
import "./Review.css";
import axios from "axios";
// import reviews_animation from "./reviews_animation.gif"

function Review() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/user_reviews")
      .then((response) => {
        setReviews(response.data);
      })
      .catch((error) => {
        console.error("Error fetching reviews data: ", error);
      });
  }, []);

  

  return (
    <div className="outerReviewsContainer">
      <div className="leftContent">
    <h3 className="reviewsTitle">Recent Reviews</h3>
      {/* <img src={reviews_animation} alt="reviews animation"/> */}
      </div>



      <div className="reviewsContainer">
        {reviews.map((reviewData, index) => (
          <ReviewCard key={index} reviewData={reviewData} />
        ))}
      </div>
    </div>
  );
}

export default Review;
