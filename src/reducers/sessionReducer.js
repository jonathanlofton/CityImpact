import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER, REMOVE_CURRENT_USER } from '../actions/sessionActions';

const nullUser = Object.freeze({
  currentUser: null
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
  case RECEIVE_CURRENT_USER:
    return {currentUser: action.currentUser};
  case REMOVE_CURRENT_USER:
    return {currentUser: {}};
  default:
    return state;
  }
};

export default SessionReducer;
