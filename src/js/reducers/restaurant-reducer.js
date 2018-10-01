import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import {
  RESTAURANTS_FETCH_REQUEST,
  RESTAURANTS_FETCH_FAILURE,
  RESTAURANTS_FETCH_SUCCESS,
  ACTIVE_RESTAURANT_SET,
  ACTIVE_RESTAURANT_CLEAR,
  ACTIVE_VIEW_CHANGE
} from '../actions/types';

export function fetchingInitialData(state = false, { type }) {
  switch(type) {
    case RESTAURANTS_FETCH_REQUEST: 
      return true;
    case RESTAURANTS_FETCH_SUCCESS: 
    case RESTAURANTS_FETCH_FAILURE: 
      return false;
    default:
      return state;
  }
};

export function restaurantsById(state = [], { type, response }) {
  switch(type) {
    case RESTAURANTS_FETCH_SUCCESS: 
      return response;
    default:
      return state;
  }
};

export function activeRestaurant(state = null, { type, id }) {
  switch(type) {
    case ACTIVE_RESTAURANT_SET: 
      return id;
    case ACTIVE_RESTAURANT_CLEAR:
    case ACTIVE_VIEW_CHANGE: 
      return null;
    default:
      return state;
  }
};

const dataReducer = combineReducers({
    fetchingInitialData,
    activeRestaurant,
    restaurantsById
});

export const getRestaurantsById = state => state.restaurantsById;
export const getActiveRestaurantId = state => state.activeRestaurant;
export const getIsFetchingInitialData = state => state.fetchingInitialData;

export const getActiveRestaurant = createSelector(
  getRestaurantsById,
  getActiveRestaurantId,
  (restaurants, activeId) => restaurants[activeId]
)

export default dataReducer;