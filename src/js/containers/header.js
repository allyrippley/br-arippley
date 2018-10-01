import React, { Component } from 'react';
import Header from '../components/header';
import { connect } from 'react-redux';
import { activeRestaurantClear } from '../actions/restaurant-actions';
import { getActiveRestaurant, getActiveView } from '../reducers';
import { changeActiveView } from '../actions/app-actions';

class HeaderContainer extends Component {
  render() {
    const { activeRestaurant, activeRestaurantClear, changeActiveView, activeView } = this.props;
    return (
      <Header 
        activeRestaurant={activeRestaurant}
        activeRestaurantClear={activeRestaurantClear}
        changeActiveView={changeActiveView}
        activeView={activeView}
      />
    );
  }
};

const mapStateToProps = state => ({
  activeRestaurant: getActiveRestaurant(state),
  activeView: getActiveView(state)
});

const mapDispatchToProps = {
  activeRestaurantClear,
  changeActiveView
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
