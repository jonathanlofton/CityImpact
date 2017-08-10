import * as SessionApiUtil from '../util/sessionApiUtil';

const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const facebookAuth = () => dispatch => (
  SessionApiUtil.loginFacebook().then(
    user => dispatch(receiveCurrentUser(user))
));
