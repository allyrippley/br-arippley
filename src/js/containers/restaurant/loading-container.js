import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getIsFetchingInitialData } from '../../reducers';
import Loading from '../../../assets/images/ic_webRefresh@2x.png';

class RestaurantLoadingContainer extends Component {
  
  render() {
    const { isFetchingData } = this.props;
    return isFetchingData ? (
        <div className="loading-spinner-container">
          <img src={Loading} className="loading-spinner" alt="loading spinner" />
          <h4>Loading restaurant data...</h4>
        </div>
    ) : (
      <div className="loading-spinner-container">
        <h4>Error loading restaurant data.</h4>
        <p>Please try refreshing or trying again later</p>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  isFetchingData: getIsFetchingInitialData(state)
});

export default connect(mapStateToProps)(RestaurantLoadingContainer);
