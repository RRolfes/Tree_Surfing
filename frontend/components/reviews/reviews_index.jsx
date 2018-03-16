import React from 'react';
import ReviewItem from './review_item';

class ReviewsIndex extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        order: "recent",
        reviews: ['a', 'b', 'c']
      };

    this.handleOrder = this.handleOrder.bind(this);
  }

  handleOrder(e) {
    if (e.target.value === "Best") {
      this.setState( {order: "Best" });
    } else if (e.target.value === "Recent") {
      this.setState( {order: "Recent" });
    }
  }


  render() {
    const reviews = this.props.reviews.reverse();

    return(
      <div className="review-index-container">
        <div className="review-index-header-contianer">
          <div className="reviews-count">
            {reviews.length} Reviews
          </div>
          <div className="reviews-best-recent">
            <input className="reviews-best" type="button" onClick={this.handleOrder} value="Best"/>
            /
            <input className="reviews-recent" type="button" onClick={this.handleOrder} value="Recent"/ >
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
