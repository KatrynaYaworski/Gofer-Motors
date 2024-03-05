import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GoogleReviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/place/details/json?place_id=YOUR_PLACE_ID&fields=name,review&key=YOUR_API_KEY`
        );
        setReviews(response.data.result.reviews);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
      <h2>Google Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.time}>
            <p>{review.text}</p>
            <p>Rating: {review.rating}</p>
            <p>Author: {review.author_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoogleReviews;
