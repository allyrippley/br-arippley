import { combineReducers } from 'redux';
import {
  ACTIVE_VIEW_CHANGE
} from '../actions/types';
import config from '../config';

export function activeView(state = 'Lunch', { type, id }) {
  switch(type) {
    case ACTIVE_VIEW_CHANGE: 
      return id;
    default:
      return state;
  }
};

export function extendedProps(state = config) {
  return state;
};


const appReducer = combineReducers({
    extendedProps,
    activeView
});

export const getActiveView = state => state.activeView;
export const getExtendedProps = state => state.extendedProps;

export default appReducer;