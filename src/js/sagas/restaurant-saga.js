import { call, put } from 'redux-saga/effects';
import DataService from '../services';
import { getRestaurantsSuccess, getRestaurantsFailure } from '../actions/restaurant-actions';

export function* getRestaurantsCall() {
  try {
    const dataService = new DataService();
    const response = yield call([dataService, dataService.getRestaurantsData]);
    yield put(getRestaurantsSuccess(response)); 
  } catch(e) {
    yield put(getRestaurantsFailure(e)); 
  }
}