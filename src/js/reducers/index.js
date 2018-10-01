import { combineReducers } from 'redux';
import restaurantData, * as restaurantSelectors from './restaurant-reducer';
import appData, * as appSelectors from './app-reducer';

const rootReducer = combineReducers({
    restaurantData,
    appData
});

export const getRestaurantsById = state => restaurantSelectors.getRestaurantsById(state.restaurantData);
export const getActiveRestaurant = state => restaurantSelectors.getActiveRestaurant(state.restaurantData);
export const getIsFetchingInitialData = state => restaurantSelectors.getIsFetchingInitialData(state.restaurantData);

export const getActiveView = state => appSelectors.getActiveView(state.appData);
export const getExtendedProps = state => appSelectors.getExtendedProps(state.appData);

export default rootReducer;