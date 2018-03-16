import { connect } from 'react-redux';

import BookingWidget from './booking_widget';
import { createBooking } from '../../actions/booking_actions';

const mapStateToProps = ( { session } ) => ({
  session
});

const mapDispatchToProps = dispatch => ({
  createBooking: id => dispatch(createBooking(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingWidget);
