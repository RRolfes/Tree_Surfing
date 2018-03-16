import React from 'react';
import ReviewItem from './review_item';

class ReviewsIndex extends React.Component {
  render() {
    const reviews = this.props.reviews;

    return(
      <div className="review-index-container">
        <div className="review-index-header-contianer">
          <div className="reviews-count">
            {Object.keys(reviews).length} Reviews
          </div>
          <div className="reviews-best-recent">
            Best / Recent
          </div>
        </div>
        {reviews.map( review => (
          <ReviewItem
            key={review.id}
            review={review}
            />
        ))}
      </div>
    );
  }
}

export default ReviewsIndex;
