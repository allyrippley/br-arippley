import React, { Component } from 'react';

class RestaurantListView extends Component {
  handleActiveRestaurantSet = () => {
    const { restaurant, activeRestaurantSet } = this.props;
    const { id } = restaurant;
    activeRestaurantSet(id);
  }
  
  render() {
    const { restaurant } = this.props;
    const { backgroundImageURL, name, category } = restaurant;
    return (
      <div 
        className="restaurant-container"
        onClick={this.handleActiveRestaurantSet}
        style={{ 
            backgroundImage: `linear-gradient(
            rgba(0, 0, 0, 0), 
            rgba(0, 0, 0, 0.75)
          ), url(${backgroundImageURL})` 
        }}>
        <div className="restaurant-details">
          <div className="restaurant-name">
            {name}
          </div>
          <div className="restaurant-category">
            {category}
          </div>
        </div>
      </div>
    )
  }
};


export default RestaurantListView;
