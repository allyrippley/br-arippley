import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activeRestaurantClear } from '../../actions/restaurant-actions';
import { getActiveRestaurant } from '../../reducers';
import RestaurantList from './restaurant-list';
import RestaurantDetails from './restaurant-details';

class RestaurantContainer extends Component {
  
  render() {
    const { activeRestaurant } = this.props;
    return (
      <div>
        <RestaurantList />
        <RestaurantDetails
          mounted={Boolean(activeRestaurant)}
          activeRestaurant={activeRestaurant}
        />
      </div>
    );
  }
};

const mapStateToProps = state => ({
  activeRestaurant: getActiveRestaurant(state)
});

const mapDispatchToProps = {
  activeRestaurantClear
};

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantContainer);
