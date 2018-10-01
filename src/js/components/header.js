import React from 'react';
import Map from '../../assets/images/icon_map@2x.png';
import Back from '../../assets/images/ic_webBack@2x.png';

const Header = ({
  activeRestaurant,
  activeRestaurantClear,
  changeActiveView,
  activeView
}) => (
  <div className="header-container">
    <div onClick={activeRestaurantClear} className="header-nav-container-left">
      {activeRestaurant && <img src={Back} className="header-back-icon" alt="Back icon"/> }
    </div>
    <div className="header-title-container">
      <span>Lunch Tyme</span>
    </div>
    <div onClick={() => changeActiveView(activeView === 'Map' ? 'Lunch' : 'Map')} className="header-nav-container-right">
      <img src={Map} className="header-map-icon" alt="Map icon" />
    </div>    
  </div>
);

export default Header;
