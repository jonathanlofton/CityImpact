import { Provider } from 'react-redux';
import React, { Component } from 'react';
import { Text } from 'react-native';
import configureStore from './store/store';
import App from './app';

class Root extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <Provider store={this.props.store}>
        <App />
      </Provider>
    );
  }
}

export default Root;
