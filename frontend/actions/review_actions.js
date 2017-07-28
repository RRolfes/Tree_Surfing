import * as APIUtil from '../util/tree_house_api_util';

export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';

export const receiveReview = review => ({
  type: RECEIVE_REVIEW,
  review
});
