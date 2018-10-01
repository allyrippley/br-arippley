import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRestaurantsRequest, activeRestaurantSet } from '../../actions/restaurant-actions';
import { getRestaurantsById } from '../../reducers';
import RestaurantListView from '../../components/restaurant-list/restaurant-list-view';
import LoadingContainer from './loading-container';

class RestaurantListContainer extends Component {
  componentDidMount() {
    const { getRestaurantsRequest } = this.props;
    getRestaurantsRequest();
  }
  
  render() {
    const { restaurantList, activeRestaurantSet } = this.props;
    return restaurantList.length > 0 ? (
      <div className="restaurant-list-container">
        {restaurantList.map((restaurant, i) => {
          return ( 
            <RestaurantListView
              key={restaurant.id}
              restaurant={restaurant}
              activeRestaurantSet={activeRestaurantSet}
            />
          )
        })}
      </div>
    ) : (
      <LoadingContainer />
    );
  }
};

const mapStateToProps = state => ({
  restaurantList: getRestaurantsById(state)
});

const mapDispatchToProps = {
  getRestaurantsRequest,
  activeRestaurantSet
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantListContainer);
