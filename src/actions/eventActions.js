import * as EventApiUtil from '../util/eventApiUtil';

export const RECEIVE_ALL_EVENTS = 'RECEIVE_ALL_EVENTS';
export const RECEIVE_SINGLE_EVENT = 'RECEIVE_SINGLE_EVENT';
export const RECEIVE_HOSTED_EVENT = 'RECEIVE_HOSTED_EVENT';

export const receiveAllEvents = events => ({
  type: RECEIVE_ALL_EVENTS,
  events
});

export const receiveSingleEvent = event => ({
  type: RECEIVE_SINGLE_EVENT,
  event
});

export const requestAllEvents = () => dispatch => (
  EventApiUtil.fetchAllEvents().then(
    ({data}) => dispatch(receiveAllEvents(data)),
    err => console.log(`from eventAction ${err}`)
  )
);

export const requestSingleEvent = id => dispatch => (
  EventApiUtil.fetchSingleEvent(id).then(
    ({data}) => dispatch(receiveSingleEvent(data)),
    err => console.log(`from eventAction ${err}`)
  )
);

export const createEvent = event => dispatch => (
  EventApiUtil.createEvent(event).then(
    ({data}) => dispatch(receiveSingleEvent(data)),
    err => console.log(`from eventAction ${err}`)
  )
);
