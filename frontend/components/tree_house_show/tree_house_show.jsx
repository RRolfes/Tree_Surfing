import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';
// import Review from 'tree-house-review';

import TreeHouseShowContainer from './tree_house_show_container';

class TreeHouseShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    const treeHouseId = parseInt(this.props.match.params.treeHouseId);
    this.props.fetchCurrentTreeHouse(treeHouseId);
  }

  render() {
    const currentTreeHouse = this.props.treeHouses.currentTreeHouse;
    if (currentTreeHouse) {
      const reviews = this.props.treeHouses.currentTreeHouse.reviews;
      const bookings = this.props.treeHouses.currentTreeHouse.bookings;

      return (
        <div className="master">
          <div className="detail-nav-bar">
            <h1>{currentTreeHouse.name}</h1>
          </div>

          <div className='tree-house-detail-container'>

            <div className='host-profile-and-tree-house-photo-container'>
              <div className="host-profile">
                This is where host info goes
              </div>
              <div className="tree-house-detail-photo-container" >
                <img  className='tree-house-detail-photo' src={currentTreeHouse.image_url}></img>
              </div>
            </div>

            <div className='bookings-table-and-reviews-index-container'>
              <div className="bookings-table">
                <h2>Not available:</h2>
                {bookings.map( booking =>
                  <span key={booking.id}>
                    {booking.start_date} - {booking.end_date}
                  </span>
                )}
              </div>

              <div className="reviews-table">


                <ul className="review-item-container">Reviews
                  {reviews.map( review =>
                    <li className="review-item" key={review.id}>
                      <div className="reviewer-profile">
                        Reviewer photo and name
                      </div>
                      <div className="review-text">
                        <h4>{review.title}</h4>
                        {review.comment}
                      </div>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

      );
    } else {
      return(
        <div>Loading</div>
      );
    }
  }
}

export default withRouter(TreeHouseShow);
