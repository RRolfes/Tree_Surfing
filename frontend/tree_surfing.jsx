import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import { fetchTreeHouse, fetchTreeHouses } from './actions/tree_house_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser } };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.store = store;
  window.fetchTreeHouses = fetchTreeHouses;
  window.fetchTreeHouse = fetchTreeHouse;
  // window.createTreeHouse = createTreeHouse;


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
