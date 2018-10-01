import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activeRestaurantClear } from '../../actions/restaurant-actions';
import { getRestaurantsById } from '../../reducers';
import Map from '../map';


class AppContainer extends Component {
  render() {
    const { restaurants } = this.props;
    return (
      <Map
        restaurants={restaurants}
      />
    );
  }
}

const mapStateToProps = state => ({
  restaurants: getRestaurantsById(state)
});

const mapDispatchToProps = {
  activeRestaurantClear
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
