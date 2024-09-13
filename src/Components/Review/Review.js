import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Review.css'; 
import man from "../Assets/man.jpeg";

function Reviews() {
  const reviews = [
    { id: 1, user: 'Alice', comment: 'Amazing experience, loved the beach house!' },
    { id: 2, user: 'Bob', comment: 'The mountain cabin was perfect for a weekend getaway!' },
    { id: 3, user: 'Carol', comment: 'City apartment was great, close to everything.' },
    // Add more reviews here
  ];

  return (
    <div className="reviews-carousel"> {/* Add this class */}
      <Carousel>
        <h2>Reviews</h2>
        {reviews.map((review) => (
          <Carousel.Item key={review.id}>
            <div className="review-card">
              <img src={man} alt=""></img>
              <h3>{review.user}</h3>
              <p>{review.comment}</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Reviews;
