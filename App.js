import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Text, AsyncStorage, UIManager  } from 'react-native';
import { persistStore } from 'redux-persist';
import configureStore from './src/store/store';
import Root from './src/root';
import { requestAllEvents, receiveAllEvents, requestSingleEvent, createEvent } from './src/actions/eventActions';
import { fetchAllEvents, fetchSingleEvent } from './src/util/eventApiUtil';
import { receiveCurrentUser, logoutUser } from './src/actions/sessionActions';
import { Spinner } from './src/components/common/Spinner';

const store = configureStore();

if (UIManager.setLayoutAnimationEnabledExperimental) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// console.log(store.dispatch(receiveAllEvents()));
window.store = store;
window.requestAllEvents = requestAllEvents;
window.receiveAllEvents = receiveAllEvents;
window.requestSingleEvent = requestSingleEvent;
window.fetchAllEvents = fetchAllEvents;
window.fetchSingleEvent = fetchSingleEvent;
window.receiveCurrentUser = receiveCurrentUser;
window.createEvent = createEvent;
window.getState = store.getState;
window.dispatch = store.dispatch;
window.logoutUser = logoutUser;

export default class Entry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ready: false
    };
  }

  componentDidMount() {
    persistStore(
      store,
      {
        storage: AsyncStorage,
        whitelist: [
          'session'
        ]
      }
    );
    this.setState({ready: true});
  }

  render() {
    if (!this.state.ready) {
      return (
        <Spinner />
      );
    }
    return(
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}
