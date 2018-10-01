import React, { Component } from 'react';
import FullPageMap from '../components/map';
import SingleMap from '../components/map/single';

export default class MapContainer extends Component {
  render() {
    const { restaurants, activeRestaurant } = this.props;

    return activeRestaurant ? (
      <SingleMap
        activeRestaurant={activeRestaurant}
      />
    ) : (
      <FullPageMap 
        restaurants={restaurants}
      />
    );
  }
};

