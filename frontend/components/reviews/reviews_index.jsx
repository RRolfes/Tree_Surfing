import React from 'react';
import ReviewItem from './review_item';

class ReviewsIndex extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    const reviews = this.props.reviews.reverse();
    console.log(reviews);

    return(
      <div className="review-index-container">
        <div className="review-index-header-contianer">
          <div className="reviews-count">
            {reviews.length} Reviews
          </div>
          <div className="reviews-best-recent">
            <div className="reviews-best">Best</div>
            /
            <div className="reviews-recent">Recent</div>
          </div>
        </div>
        {reviews.map( review => (
          <ReviewItem key={review.id} review={review}/>
        ))}
      </div>
    );
  }
}

export default ReviewsIndex;
