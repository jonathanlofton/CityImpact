import React, { Component } from 'react';
import configureStore from './src/store/store';
import Root from './src/root';
import { requestAllEvents, receiveAllEvents} from './src/actions/eventActions';
import { fetchAllEvents, createEvent } from './src/util/eventApiUtil';
//
const store = configureStore();
// console.log(store.dispatch(receiveAllEvents()));
window.store = store;
window.requestAllEvents = requestAllEvents;
window.receiveAllEvents = receiveAllEvents;
window.fetchAllEvents = fetchAllEvents;
window.createEvent = createEvent;
window.getState = store.getState;
window.dispatch = store.dispatch;

export default class Entry extends Component {
  render() {
    return(
      <Root store={store} />
    );
  }
}
