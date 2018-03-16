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
    this.sortByDate = this.sortByDate.bind(this);
    this.sortByHelpfuls = this.sortByHelpfuls.bind(this);
  }


  sortByHelpfuls() {
    this.props.reviews.sort(function(a, b) {
      return b.helpfuls - a.helpfuls;
    });
  }

  sortByDate() {
    this.props.reviews.sort(function(a, b) {
      return a.id - b.id;
    });
  }

  handleOrder(e) {
    if (e.target.value === "Best") {
      this.sortByHelpfuls();
      this.setState( {order: "best" });
    } else if (e.target.value === "Recent") {
      this.sortByDate();
      this.setState( {order: "recent" });
    }
  }



  render() {
    const reviews = this.props.reviews;
    let order = this.state.order;
    
    return(
      <div className="review-index-container">
        <div className="review-index-header-contianer">
          <div className="reviews-count">
            {reviews.length} Reviews
          </div>
          <div className={"reviews-best-recent"}>
            {order === "recent" ? (
              <input className={"reviews-recent-black"} type="button" onClick={this.handleOrder} value="Recent"/ >
              ) : (
                <input className={"reviews-recent-grey"} type="button" onClick={this.handleOrder} value="Recent"/ >
                )}
                /
                {order === "best" ? (
                  <input className={"reviews-best-black"} type="button" onClick={this.handleOrder} value="Best"/>
                ) : (
                  <input className={"reviews-best-grey"} type="button" onClick={this.handleOrder} value="Best"/ >
                  )}

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
