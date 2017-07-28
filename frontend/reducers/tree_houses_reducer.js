import merge from 'lodash/merge';

import CLEAR_STATE from '../actions/session_actions';

import {
  RECEIVE_TREE_HOUSE,
  RECEIVE_CURRENT_TREE_HOUSE,
  RECEIVE_TREE_HOUSES,
} from '../actions/tree_house_actions';

import {
  RECEIVE_BOOKING
} from '../actions/booking_actions';

import {
  RECEIVE_REVIEW
} from '../actions/review_actions';


const TreeHousesReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_REVIEW:
      newState.currentTreeHouse.reviews.push(action.review);
      return newState;
    case RECEIVE_BOOKING:
      newState.currentTreeHouse.bookings.unshift(action.booking);
      return newState;
    case RECEIVE_TREE_HOUSES:
      return action.treeHouses;
    case RECEIVE_TREE_HOUSE:
      const newTreeHouse = { [action.treeHouse.id]: action.treeHouse };
      return merge({}, state, newTreeHouse);
    case RECEIVE_CURRENT_TREE_HOUSE:
      const currentTreeHouse = action.currentTreeHouse;
      return merge({}, state, { currentTreeHouse });
    case CLEAR_STATE:
      return {};
    default:
      return state;
  }
};

export default TreeHousesReducer;
