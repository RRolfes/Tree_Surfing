import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import {
  fetchTreeHouse,
  fetchTreeHouses,
  fetchCurrentTreeHouse
} from './actions/tree_house_actions';

import {fetchUser} from './actions/user_actions';
import { createBooking } from './util/booking_api_util';
import { createReview } from './util/review_api_util';

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
  window.createReview = createReview;
  window.createBooking = createBooking;


  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store}/>, root);
});
