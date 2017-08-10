import merge from 'lodash/merge';

import {
  RECEIVE_ALL_EVENTS,
  RECEIVE_SINGLE_EVENT
} from '../actions/eventActions';

const defaultState = Object.freeze({
  entities: {},
  currentEvent: null,
  errors: []
});

const EventReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_ALL_EVENTS:
      // return action.events;
      return merge({}, state, { entities: action.events, errors: []});
    case RECEIVE_SINGLE_EVENT:
      const event = action.event;
      newState = merge({}, state, { entities: event });
      return newState;
    default:
      return state;
  }
};

export default EventReducer;
