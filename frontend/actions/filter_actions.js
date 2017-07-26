import { fetchTreeHouses } from './tree_house_actions';

export const UPDATE_FILTER = 'UPDATE_FILTER';

export const changeFilter = (bounds) => ({
  type: UPDATE_FILTER,
  bounds
});

// removed value from benchbnb
// filter === bounds

export const updateFilter = (bounds) => (dispatch, getState) => {
  dispatch(changeFilter(bounds));
  return fetchTreeHouses(getState().filters)(dispatch);
};
