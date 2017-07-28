import merge from 'lodash/merge';

import {
  RECEIVE_BOOKING
} from '../actions/booking_actions';

const BookingReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_BOOKING:
      const booking = { [action.booking.id]: action.booking };
      return merge({}, state, booking);
    default:
      return state;
  }
};

export default BookingReducer;
