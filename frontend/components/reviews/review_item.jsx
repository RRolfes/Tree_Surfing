import React from 'react';
import ReactDOM from 'react-dom';

class ReviewItem extends React.Component {
  render() {
    const review = this.props.review;

    return(
      <div className="review-item-container">
        <div className="reviewer-photo-header-container">
          <img className='reviewer-photo' src={review.img_url}></img>
          <div className="reviewer-name-date">
            <div className="reviewer-name">{review.reviewer_name}</div>
            <div className="review-date">{review.date}</div>
          </div>
        </div>
        <div className="review-content-container">
          <div className="review-body">
            {review.comment}
          </div>
        </div>
      </div>
    );
  }

}

export default ReviewItem;
