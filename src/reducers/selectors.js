import values from 'lodash/values';

export const selectAllEvents = (state) => {
  return values(state.events);
};
