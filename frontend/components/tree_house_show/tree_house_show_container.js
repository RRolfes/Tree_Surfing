import { connect } from 'react-redux';

import TreeHouseShow from './tree_house_show';
import { fetchCurrentTreeHouse } from '../../actions/tree_house_actions';
import { fetchUser } from '../../actions/user_actions';
import { createBooking } from '../../actions/booking_actions';
import { createReview } from '../../actions/review_actions';

const mapStateToProps = ( { treeHouses, user, session, booking } ) => ({
  treeHouses,
  user,
  session,
  booking
});

const mapDispatchToProps = dispatch => ({
  fetchCurrentTreeHouse: id => dispatch(fetchCurrentTreeHouse(id)),
  fetchUser: id => dispatch(fetchUser(id)),
  createBooking: id => dispatch(createBooking(id)),
  createReview: review => dispatch(createReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TreeHouseShow);
