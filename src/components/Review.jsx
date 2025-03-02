import React, { useState, useEffect } from 'react';
import './Review.css';

const Review = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      stars: 5,
      name: 'Ahmed Z.',
      event: 'Engagement Ceremony',
      text: 'The event planning team exceeded our expectations for our engagement ceremony. The venue, catering, and entertainment were flawless, making it a magical day. Highly recommended! 🌟',
      image: '/images/review1.jpg', // Placeholder image for the reviewer
    },
    {
      id: 2,
      stars: 4,
      name: 'Sarah M.',
      event: 'Wedding Reception',
      text: 'Great service for our wedding reception. The photography and decorations were stunning, though the setup took a bit longer than expected.',
      image: '/images/review2.jpg',
    },
    {
      id: 3,
      stars: 5,
      name: 'Priya K.',
      event: 'Birthday Party',
      text: 'Outstanding experience for my daughter’s birthday party! The entertainment and food catering were incredible, creating unforgettable memories.',
      image: '/images/review3.jpg',
    },
  ]);

  // Optional: Fetch reviews from backend
  useEffect(() => {
    /*
    fetch('http://localhost:5000/api/reviews')
      .then(response => response.json())
      .then(data => setReviews(data))
      .catch(error => console.error('Error fetching reviews:', error));
    */
  }, []);

  // Render star icons based on rating with enhanced design
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star ${i <= rating ? 'filled' : ''}`}
          role="img"
          aria-label={`${rating} out of 5 stars`}
        >
          🌟
        </span>
      );
    }
    return (
      <div className="star-rating">
        {stars} <span className="rating-text">{rating}/5 Stars</span>
      </div>
    );
  };

  return (
    <section className="review" id="review">
      <h1 className="heading">
        client's <span>reviews</span>
      </h1>
      <div className="review-container">
        {reviews.map((review) => (
          <div key={review.id} className="review-box">
            <div className="review-header">{renderStars(review.stars)}</div>
            <div className="review-content">
              <div className="review-user">
                <img src={review.image} alt={`Profile of ${review.name}`} className="review-image" />
                <div className="review-user-info">
                  <h3>Name: {review.name}</h3>
                  <p>Event: {review.event}</p>
                </div>
              </div>
              <p className="review-text">Review: {review.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;