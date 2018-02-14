import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';
import Review from './tree_house_review';
import ReviewForm from './review_form';
import { createReview } from '../../util/review_api_util';

import NavBarContainer from '../nav_bar/nav_bar_container';
import TreeHouseShowContainer from './tree_house_show_container';
import BookingForm from './booking_form';


class TreeHouseShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      host: {}
    };
  }

  componentDidMount() {
    const treeHouseId = parseInt(this.props.match.params.treeHouseId);
    this.props.fetchCurrentTreeHouse(treeHouseId).then( treeHouse =>
      this.props.fetchUser(this.props.treeHouses.currentTreeHouse.user_id).then( host =>
        this.setState({
          host: host.user
        })
      )
    );
  }


  render() {
    const currentTreeHouse = this.props.treeHouses.currentTreeHouse;
    const usersHaveLoaded = this.props.user;
    // break out into components
    // need seperate comps for all
    if (currentTreeHouse && usersHaveLoaded) {
      const reviews = this.props.treeHouses.currentTreeHouse.reviews;
      const bookings = this.props.treeHouses.currentTreeHouse.bookings;
      //use state?
      const host = this.state.host;

      const backgroundImageStyles = {
        backgroundImage: `url(${currentTreeHouse.image_url})`
      };


      return (
        <div className="tree-house-detail-master">
          <NavBarContainer />
          <div className='tree-house-detail-container'>
            <div className="tree-house-body"></div>
            <div className="tree-house-detail-photo-container" >
              <div className='tree-house-detail-photo' style={backgroundImageStyles}></div>
            </div>
            <div className="tree-house-show">
              <div className="tree-house-centered">
                <div>
                  <div className="tree-house-name">{currentTreeHouse.name}</div>
                  <span>{`${currentTreeHouse.city}, ${currentTreeHouse.state}`}</span>
                </div>
                <div className="host-profile">
                  <div className="host-name">Host: {host.full_name}</div>
                  <div className="host-photo-container">
                    <img className='host-photo' src={host.image_url}></img>
                  </div>
                  <ul className="host-info">
                    <li><b>Hometown</b>: {host.city}</li>
                    <li><b>Age</b>: {host.age}</li>
                    <li><b>Occupation</b>: {host.occupation}</li>
                    <li><b>About</b>: {host.about}</li>
                  </ul>
                </div>

                <ul className="review-item-container">
                  {reviews.map( review =>
                    <li key={review.id}>
                      <Review
                        fetchUser={this.props.fetchUser}
                        userId={review.user_id}
                        review={review}
                        comment={review.comment}
                        />
                    </li>
                  )}
                </ul>
              </div>
            </div>

            <div className='bookings-table-and-reviews-index-container'>
              <div className="bookings-table">
                <BookingForm
                  bookings={bookings}
                  createBooking={this.props.createBooking}
                  session={this.props.session}
                  treeHouseId={currentTreeHouse.id}
                  booking={this.props.booking}
                  />
              </div>

              <div className="reviews-table">
                <div className="review-form-container">
                  <ReviewForm
                    treeHouseId={currentTreeHouse.id}
                    session={this.props.session}
                    createReview={this.props.createReview}
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return(
        <div>Loading...</div>
      );
    }
  }
}

export default withRouter(TreeHouseShow);
