import React from 'react';
import ReactDOM from 'react-dom';
import { dateToWords } from '../../util/misc_util';

class ReviewItem extends React.Component {
  render() {
    const review = this.props.review;

    return(
      <div className="review-item-container">
        <div className="reviewer-photo-header-container">
          <div className="review-photo-container">
            <img className='reviewer-photo' src={review.img_url}></img>
          </div>
          <div className="reviewer-name-date">
            <div className="reviewer-name">{review.reviewer_name}</div>
            <div className="review-date">{dateToWords(review.date)}</div>
          </div>
        </div>
        <div className="review-body-container">
          <div className="review-body">
            {review.comment}
          </div>
        </div>
      </div>
    );
  }

}

export default ReviewItem;
