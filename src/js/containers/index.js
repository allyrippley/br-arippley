import React, { Component } from 'react';
import { connect } from 'react-redux';
import { activeRestaurantClear } from '../actions/restaurant-actions';
import { getActiveView } from '../reducers';
import Header from './header';
import Footer from './footer';
import RestaurantContainer from './restaurant';
import Info from '../components/info';
import Map from './restaurant/restaurant-map';

class AppContainer extends Component {
  router() {
    const { activeView } = this.props;
    
    switch(activeView) {
      case 'Lunch':
        return <RestaurantContainer />;
      case 'Map':
        return <Map />;
      case 'Internet':
        return <Info />;
      default:
        return;
    }
  }
  render() {
    return (
      <div className="lunch-tyme-container">
        <Header />
        {this.router()}
        <Footer />
      </div>
    );
  }
};

const mapStateToProps = state => ({
  activeView: getActiveView(state)
});

const mapDispatchToProps = {
  activeRestaurantClear
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
