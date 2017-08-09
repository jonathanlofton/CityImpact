import React, { Component } from 'react';
import configureStore from './src/store/store';
import Root from './src/root';
import { requestAllEvents, receiveAllEvents } from './src/actions/eventActions';
//
const store = configureStore();
// console.log(store.dispatch(receiveAllEvents()));
window.store = store;
window.requestAllEvents = requestAllEvents;
window.getState = store.getState;

export default class Entry extends Component {
  render() {
    return(
      <Root store={store} />
    );
  }
}
