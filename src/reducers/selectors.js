import values from 'lodash/values';

export const selectAllEvents = (state) => {
  return values(state.events.entities);
};


export const selectHostedEvents = (state) => {
  let events = selectAllEvents(state);
  let currentUser = state.session.currentUser;
  let hostedEvents = [];
  events.forEach( (el, idx) => {
    if (el.host && el.host._id === currentUser._id) {
      hostedEvents.push(el);
    }
  });
  return events;
};
