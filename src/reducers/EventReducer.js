import merge from 'lodash/merge';

import {
  RECEIVE_ALL_EVENTS
} from '../actions/eventActions';

const defaultState = Object.freeze({
  entities: {},
  currentEvent: null,
  errors: []
});

const EventReducer = (state = defaultState, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_EVENTS:
      const events = action.events;
      return merge({}, state, { entities: events, errors: []});
    default:
      return state;

  }
};
