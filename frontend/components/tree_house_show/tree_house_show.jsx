import React from 'react';
import ReactDOM from 'react-dom';
import { withRouter } from 'react-router-dom';

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
        <div className='tree-house-detail-master-container'>
          <div className="detail-nav-bar">
            <h1>{currentTreeHouse.name}</h1>
          </div>

          <div className='host-profile-and-tree-house-photo-container'>
            <div className="host-profile">
              This is where host info goes
            </div>
            <div className='tree-house-photo'>
              <img src={currentTreeHouse.image_url}></img>
            </div>
          </div>

          <div className='bookings-table-and-reviews-index-container'>
            <div className="bookings-table">
              <h2>Not available these dates:</h2>
              {bookings.map( booking =>
                <li key={booking.id}>
                  {booking.start_date} - {booking.end_date}
                </li>
              )}
            </div>

            <div className="reviews-table">
              <h2>Reviews</h2>
              {reviews.map( review =>
                <li key={review.id}>
                  {review.title}
                <br/>
                  {review.comment}
                </li>
              )}
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
