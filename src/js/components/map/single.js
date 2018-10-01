import React, { Component } from 'react';
import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import config from '../../config';

class RestaurantMap extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }  
  }

  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onMapClicked = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  };
  
  render() {
      const style = {
        width: '100%',
        height: window.innerHeight < 600 ? 200 : '50%',
        marginLeft: 'auto',
        marginRight: 'auto'
      };
      
      const { activeRestaurant } = this.props;

      return activeRestaurant.location ? (
        <Map
          item
          xs={12}
          style={style}
          google={this.props.google}
          onClick={this.onMapClick}
          zoom={12}
          initialCenter={{ lat: activeRestaurant.location.lat, lng: activeRestaurant.location.lng }}
        >
          <Marker
            onClick={this.onMarkerClick}
            title={activeRestaurant.name}
            position={{ lat: activeRestaurant.location.lat, lng: activeRestaurant.location.lng }}
            name={activeRestaurant.name}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}
          >
            <div style={{ paddingTop: 40 }}>
              <h4>{activeRestaurant.name}</h4>
              <p>{activeRestaurant && activeRestaurant.location && activeRestaurant.location.formattedAddress[0]}</p>
              <p>{activeRestaurant && activeRestaurant.location && activeRestaurant.location.formattedAddress[1]}</p>
            </div>
          </InfoWindow>
        </Map>
      ) : (
        <div>Loading Map...</div>
      );
    }
}

export default GoogleApiWrapper({
    apiKey: config.appKeys.GOOGLE_MAPS_KEY
})(RestaurantMap)