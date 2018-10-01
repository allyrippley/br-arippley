import React, { Component } from 'react';
import Map from '../../components/map/single';

class RestaurantListContainer extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      show: true,
      style: {
        transition: 'all 2s ease',
        position: 'fixed',
        top: 70,
        bottom: window.innerWidth > 600 ? 0 : 56,
        left: '1900px',
        right: '-1900px',
        opacity: 0,
        backgroundColor: '#fff'
      }
    };
  }
  
  componentWillReceiveProps(newProps) {
    if(this.props.mounted && !newProps.mounted) {
      return this.unMountStyle();
    }
    this.setState({
      show: true
    });
    setTimeout(this.mountStyle, 10);
  }
  
  unMountStyle = () => {
    this.setState({
      style: {
        transition: 'all 1s ease',
        position: 'fixed',
        top: 70,
        bottom: window.innerWidth > 600 ? 0 : 56,
        left: '1900px',
        right: '-1900px',
        opacity: 0,
        backgroundColor: '#fff'
      }
    });
  }
  
  mountStyle = () => {
    this.setState({
      style: {
        transition: 'all 1s ease',
        position: 'fixed',
        top: 70,
        bottom: window.innerWidth > 600 ? 0 : 56,
        left: window.innerWidth > 1200 ? '60%' : 0,
        right: 0,
        opacity: 1,
        backgroundColor: '#fff'
      }
    });
  }
  
  transitionEnd = () => {
    if(!this.props.mounted) {
      this.setState({
        show: false
      });
    }
  }
  
  render() {
    const { activeRestaurant = {} } = this.props;
    const addressString = activeRestaurant && activeRestaurant.location && `${activeRestaurant.location.formattedAddress[0]}, ${activeRestaurant.location.formattedAddress[1]}`
    return this.state.show && (
      <div className="restaurant-details-container" style={this.state.style} onTransitionEnd={this.transitionEnd}>
        <div className="restaurant-map-container" style={{ height: window.innerHeight < 600 ? 200 : '50%' }}>
          {activeRestaurant && <Map activeRestaurant={activeRestaurant} />}
        </div>
        <div className="restaurant-details-bar">
          <div className="restaurant-details-name">{activeRestaurant.name}</div>
          <div className="restaurant-details-category">{activeRestaurant.category}</div>
        </div>
        <div className="restaurant-details-info-container">
          <div className="restaurant-details-address">
            {addressString}
          </div>
          <div className="restaurant-details-phone">
            {activeRestaurant.contact && activeRestaurant.contact.formattedPhone}
          </div>
          <div className="restaurant-details-social">
            {activeRestaurant.contact && activeRestaurant.contact.twitter && `@${activeRestaurant.contact.twitter}` }
          </div>
        </div>        
      </div> 
    )
  }
};


export default RestaurantListContainer;
