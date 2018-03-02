import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';
import Review from './tree_house_review';
import ReviewForm from './review_form';
import { createReview } from '../../util/review_api_util';

import NavBarContainer from '../nav_bar/nav_bar_container';
import TreeHouseShowContainer from './tree_house_show_container';
import BookingForm from './booking_form';
import Intro from './intro';
import About from './about';
import Details from './details';
import Features from './features';


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

    if (currentTreeHouse && usersHaveLoaded) {
      const reviews = this.props.treeHouses.currentTreeHouse.reviews;
      const bookings = this.props.treeHouses.currentTreeHouse.bookings;
      const host = this.state.host;

      const backgroundImageStyles = {
        backgroundImage: `url(${currentTreeHouse.image_url})`
      };


      return (
        <div className="tree-house-detail-master">
          <div className="tree-house-detail-photo-container" >
            <div className='tree-house-detail-photo' style={backgroundImageStyles}></div>
          </div>
          <div className='tree-house-detail-container'>
            <div className="tree-house-centered">
              <div className="tree-house-content">
                <Intro
                  treeHouse={currentTreeHouse}
                  />
                <About
                  treeHouse={currentTreeHouse}
                  host={host}
                  />
                <Details
                  treeHouse={currentTreeHouse}
                  />
                <Features
                  treeHouse={currentTreeHouse}
                  />

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
                  <div className="bookings-table">
                    <BookingForm
                      bookings={bookings}
                      createBooking={this.props.createBooking}
                      session={this.props.session}
                      treeHouseId={currentTreeHouse.id}
                      booking={this.props.booking}
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

// <div className='bookings-table-and-reviews-index-container'>
//   <div className="bookings-table">
//     <BookingForm
//       bookings={bookings}
//       createBooking={this.props.createBooking}
//       session={this.props.session}
//       treeHouseId={currentTreeHouse.id}
//       booking={this.props.booking}
//       />
//   </div>
//
//   <div className="reviews-table">
//     <div className="review-form-container">
//       <ReviewForm
//         treeHouseId={currentTreeHouse.id}
//         session={this.props.session}
//         createReview={this.props.createReview}
//         />
//     </div>
//   </div>
// </div>

export default withRouter(TreeHouseShow);
