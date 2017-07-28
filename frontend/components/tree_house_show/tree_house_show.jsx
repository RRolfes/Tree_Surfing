import React from 'react';
import ReactDOM from 'react-dom';
import { Link, withRouter } from 'react-router-dom';
import Review from './tree_house_review';
import ReviewForm from './review_form';
import { createReview } from '../../util/review_api_util';

import TreeHouseShowContainer from './tree_house_show_container';
import BookingForm from './booking_form';

class TreeHouseShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      photo: '',
      city: '',
      age: '',
      occupation: '',
      about: ''
    };
  }

  componentDidMount() {
    const treeHouseId = parseInt(this.props.match.params.treeHouseId);
    this.props.fetchCurrentTreeHouse(treeHouseId).then( treeHouse =>
      this.props.fetchUser(this.props.treeHouses.currentTreeHouse.user_id).then( host =>
        this.setState({
          name: host.user.full_name,
          photo: host.user.image_url,
          city: host.user.city,
          age: host.user.age,
          occupation: host.user.occupation,
          about: host.user.about
        })
      )
    );
  }


  render() {
    const currentTreeHouse = this.props.treeHouses.currentTreeHouse;
    const hostLoad = this.props.user;

    if (currentTreeHouse && hostLoad) {
      const reviews = this.props.treeHouses.currentTreeHouse.reviews;
      const bookings = this.props.treeHouses.currentTreeHouse.bookings;
      const host = this.state;


      return (
        <div className="master">
          <div className='tree-house-detail-container'>

            <div className='host-profile-and-tree-house-photo-container'>
              <div className="host-profile">
                Host Profile
                <h2 className="host-name">{host.name}</h2>
                <div className="host-photo-container">
                  <img className='host-photo' src={host.photo}></img>
                </div>
                <ul className="host-info">
                  <li><b>Hometown</b>: {host.city}</li>
                  <li><b>Age</b>: {host.age}</li>
                  <li><b>Occupation</b>: {host.occupation}</li>
                  <li><b>About</b>: {host.about}</li>
                </ul>
                <Link to={`/treehouses`} className="link">Back to Index page</Link>
              </div>


              <div className="tree-house-detail-photo-container" >
                <img className='tree-house-detail-photo' src={currentTreeHouse.image_url}></img>
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
        <div>Loading123</div>
      );
    }
  }
}

export default withRouter(TreeHouseShow);
