import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER } from '../actions/sessionActions';
import { RECEIVE_HOSTED_EVENT } from '../actions/eventActions';

const nullUser = Object.freeze({
  currentUser: null
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
  case RECEIVE_CURRENT_USER:
    return {currentUser: action.currentUser};
  // case RECEIVE_HOSTED_EVENT:
  //   return {}
  default:
    return state;
  }
};

export default SessionReducer;
