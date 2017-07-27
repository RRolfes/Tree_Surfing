import * as APIUtil from '../util/tree_house_api_util';

export const RECEIVE_TREE_HOUSES = 'RECEIVE_TREE_HOUSES';
export const RECEIVE_TREE_HOUSE = 'RECEIVE_TREE_HOUSE';
export const RECEIVE_CURRENT_TREE_HOUSE = 'RECEIVE_CURRENT_TREE_HOUSE';

export const receiveTreeHouses = treeHouses => ({
  type: RECEIVE_TREE_HOUSES,
  treeHouses
});

export const receiveCurrentTreeHouse = currentTreeHouse => ({
  type: RECEIVE_CURRENT_TREE_HOUSE,
  currentTreeHouse
});

export const receiveTreeHouse = treeHouse => ({
  type: RECEIVE_TREE_HOUSE,
  treeHouse
});

export const fetchTreeHouses = (bounds) => dispatch => (
  APIUtil.fetchTreeHouses(bounds).then(treeHouses => (
    dispatch(receiveTreeHouses(treeHouses))
  ))
);

export const fetchTreeHouse = id => dispatch => (
  APIUtil.fetchTreeHouse(id).then(treeHouse => (
    dispatch(receiveTreeHouse(treeHouse))
  ))
);

export const fetchCurrentTreeHouse = id => dispatch => (
  APIUtil.fetchTreeHouse(id).then(treeHouse => (
    dispatch(receiveCurrentTreeHouse(treeHouse))
  ))
);

export const createTreeHouse = treeHouse => dispatch => (
  APIUtil.createTreeHouse(treeHouse).then(treeHouse1 => (
    dispatch(receiveTreeHouse(treeHouse1))
  ))
);
