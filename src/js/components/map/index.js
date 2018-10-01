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
  
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  };

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
        height: '100%',
        marginLeft: 'auto',
        marginRight: 'auto'
      };
      
      const { restaurants } = this.props;

      return (restaurants && restaurants.length > 0) ? (
        <Map
          item
          xs={12}
          style={style}
          google={this.props.google}
          onClick={this.onMapClick}
          zoom={12}
          initialCenter={{ lat: restaurants[0].location.lat, lng: restaurants[0].location.lng }}
        >
          {restaurants && restaurants.map((restaurant, i) => {
                return (
                  <Marker
                    key={restaurant.id}
                    onClick={this.onMarkerClick}
                    title={restaurant.name}
                    position={{ lat: restaurant.location.lat, lng: restaurant.location.lng }}
                    name={restaurant.name}
                  />
                )
              })
            }
          {this.state.activeMarker && 
            (
              <InfoWindow
                marker={this.state.activeMarker}
                visible={this.state.showingInfoWindow}
              >
                <div>
                  <span>{this.state.activeMarker.name}</span>
                </div>
              </InfoWindow>
            )
          }
        </Map>
      ) : (
        <div>Loading Map...</div>
      );
    }
}

export default GoogleApiWrapper({
    apiKey: config.appKeys.GOOGLE_MAPS_KEY
})(RestaurantMap)

