import * as EventApiUtil from '../util/eventApiUtil';

export const RECEIVE_ALL_EVENTS = 'RECEIVE_ALL_EVENTS';

export const receiveAllEvents = (events) => ({
  type: RECEIVE_ALL_EVENTS,
  events
});

export const requestAllEvents = () => dispatch => (
  EventApiUtil.fetchAllEvents().then(events => (
    dispatch(receiveAllEvents(events))
  ))
);
