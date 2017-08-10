import * as EventApiUtil from '../util/eventApiUtil';

export const RECEIVE_ALL_EVENTS = 'RECEIVE_ALL_EVENTS';
export const RECEIVE_SINGLE_EVENT = 'RECEIVE_SINGLE_EVENT';

export const receiveAllEvents = (events) => ({
  type: RECEIVE_ALL_EVENTS,
  events
});

export const receiveSingleEvent = (event) => ({
  type: RECEIVE_SINGLE_EVENT,
  event
});

export const requestAllEvents = () => dispatch => (
  EventApiUtil.fetchAllEvents().then(events => (
    dispatch(receiveAllEvents(events.data))
  ))
);

export const requestSingleEvent = (id) => dispatch => (
  EventApiUtil.fetchSingleEvent(id).then(event => (
    dispatch(receiveSingleEvent(event.data))
  ))
);

export const createEvent = (event) => dispatch => (
  EventApiUtil.createEvent(event).then(newEvent => {
    return (
      dispatch(receiveSingleEvent(newEvent.data))
    );
  })
);
