import * as SessionApiUtil from '../util/sessionApiUtil';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const loginUser = () => dispatch => (
  SessionApiUtil.loginFacebook().then(
    user => dispatch(receiveCurrentUser(user)),
    err => console.log(err)
));
