
import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import TreeHousesReducer from './tree_houses_reducer';
import FiltersReducer from './filters_reducer';
import UserReducer from './user_reducer';
import BookingReducer from './bookings_reducer';


const RootReducer = combineReducers({
  treeHouses: TreeHousesReducer,
  filters: FiltersReducer,
  session: SessionReducer,
  user: UserReducer,
  booking: BookingReducer
});

export default RootReducer;
