
import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import TreeHousesReducer from './tree_houses_reducer';
import FiltersReducer from './filters_reducer';
import UserReducer from './user_reducer';
import BookingReducer from './bookings_reducer';
import LocationReducer from './location_reducer';


const RootReducer = combineReducers({
  treeHouses: TreeHousesReducer,
  filters: FiltersReducer,
  session: SessionReducer,
  user: UserReducer,
  booking: BookingReducer,
  location: LocationReducer
});

export default RootReducer;
