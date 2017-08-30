import { RECEIVE_CURRENT_USER } from '../actions/sessionActions';

const nullUser = Object.freeze({
  currentUser: null
});

const SessionReducer = (state = nullUser, action) => {
  Object.freeze(state);
  switch (action.type) {
  case RECEIVE_CURRENT_USER:
    return {currentUser: action.currentUser};
  default:
    return state;
  }
};

export default SessionReducer;
