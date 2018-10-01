import {
  RESTAURANTS_FETCH_REQUEST,
  RESTAURANTS_FETCH_SUCCESS,
  RESTAURANTS_FETCH_FAILURE,
  ACTIVE_RESTAURANT_SET,
  ACTIVE_RESTAURANT_CLEAR
} from './types';

export const getRestaurantsRequest = () => ({
  type: RESTAURANTS_FETCH_REQUEST
});

export const getRestaurantsSuccess = (response) => ({
  type: RESTAURANTS_FETCH_SUCCESS,
  response
});

export const getRestaurantsFailure = () => ({
  type: RESTAURANTS_FETCH_FAILURE
});

export const activeRestaurantSet = (id) => ({
  type: ACTIVE_RESTAURANT_SET,
  id
});

export const activeRestaurantClear = () => ({
  type: ACTIVE_RESTAURANT_CLEAR
});
