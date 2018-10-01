import React, { Component } from 'react';
import Footer from '../components/footer';
import { connect } from 'react-redux';
import { changeActiveView } from '../actions/app-actions';
import { getActiveView } from '../reducers';

class HeaderContainer extends Component {
  render() {
    const { activeView, changeActiveView } = this.props;
    return (
      <Footer 
        activeView={activeView}
        handleChangeView={changeActiveView}
      />
    );
  }
}


const mapStateToProps = state => ({
  activeView: getActiveView(state)
});

const mapDispatchToProps = {
  changeActiveView
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
