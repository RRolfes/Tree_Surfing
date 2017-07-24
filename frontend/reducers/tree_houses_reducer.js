import merge from 'lodash/merge';

import CLEAR_STATE from '../actions/session_actions';

import {
  RECEIVE_TREE_HOUSE,
  RECEIVE_TREE_HOUSES,
} from '../actions/tree_house_actions';

const TreeHousesReducer = ( state = {}, action ) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_TREE_HOUSES:
      return action.treeHouses;
    case RECEIVE_TREE_HOUSE:
      const newTreeHouse = { [action.treeHouse.id]: action.treeHouse };
      return merge({}, state, newTreeHouse);
    case CLEAR_STATE:
      return {};
    default:
      return state;
  }
};

export default TreeHousesReducer;
