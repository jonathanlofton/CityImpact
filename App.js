import React, { Component } from 'react';
import configureStore from './src/store/store';
import Root from './src/root';
import { requestAllEvents, receiveAllEvents, createEvent, requestSingleEvent } from './src/actions/eventActions';
import { fetchAllEvents} from './src/util/eventApiUtil';
import { receiveCurrentUser } from './src/actions/sessionActions';
//
const store = configureStore();
// console.log(store.dispatch(receiveAllEvents()));
window.store = store;
window.requestAllEvents = requestAllEvents;
window.receiveAllEvents = receiveAllEvents;
window.requestSingleEvent = requestSingleEvent;
window.fetchAllEvents = fetchAllEvents;
window.receiveCurrentUser = receiveCurrentUser;
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
