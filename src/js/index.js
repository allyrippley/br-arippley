import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppContainer from './containers';
import configureStore from './store/configureStore';
import '../sass/index.scss';
class App extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <AppContainer />
      </Provider>
    );
  }
}

export default App;
