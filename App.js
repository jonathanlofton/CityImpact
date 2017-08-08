import React, { Component } from 'react';
// import configureStore from './src/store/store';
import Root from './src/root';
// import { requestAllEvents } from './src/components/actions/eventActions';
//
// const store = configureStore();
// window.store = store;
// window.requestAllEvents = requestAllEvents;

export default class Entry extends Component {
  render() {
    return(
      <Root />
    );
  }
}
