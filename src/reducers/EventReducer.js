import merge from 'lodash/merge';

import {
  RECEIVE_ALL_EVENTS,
  RECEIVE_SINGLE_EVENT,
  // RECEIVE_HOSTED_EVENT
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
    console.log(`ACTION ${action}`);
      const event = action.event;
      newState = merge({}, state);
      newState.entities[event._id] = event;
      newState.currentEvent = event;
      return newState;
    // case RECEIVE_HOSTED_EVENT:
    //   const event = action.event;
    //   newState = merge({}, state);
    //   newState.entities[event._id] = event;
    //   return newState;
    default:
      return state;
  }
};

export default EventReducer;
