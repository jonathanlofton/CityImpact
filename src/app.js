import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { SessionNavigator } from './config/router';

class App extends Component {

  render() {
    return(
      <SessionNavigator />
    );
  }
}


export default App;
