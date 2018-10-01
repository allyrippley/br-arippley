import { all, takeLatest } from 'redux-saga/effects';
import { RESTAURANTS_FETCH_REQUEST } from '../actions/types';
import { getRestaurantsCall } from './restaurant-saga';

export default function* rootSaga() {
  yield all(
    [
      takeLatest(RESTAURANTS_FETCH_REQUEST, getRestaurantsCall)
    ]
  )
}