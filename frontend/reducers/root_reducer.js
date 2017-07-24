
import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import TreeHousesReducer from './tree_houses_reducer';

const RootReducer = combineReducers({
  treeHouses: TreeHousesReducer,
  session: SessionReducer
});

export default RootReducer;
