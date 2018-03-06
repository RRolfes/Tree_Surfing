import { fetchTreeHouses } from './tree_house_actions';

export const UPDATE_FILTER = 'UPDATE_FILTER';

export const changeFilter = (bounds) => ({
  type: UPDATE_FILTER,
  bounds
});


export const updateFilter = (bounds) => (dispatch, getState) => {
  dispatch(changeFilter(bounds));
  fetchTreeHouses({bounds})(dispatch);
};
