import * as SessionApiUtil from '../util/sessionApiUtil';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const loginFacebook = data => dispatch => (
  SessionApiUtil.loginFacebook(data).then(
    res => dispatch(receiveCurrentUser(res.user)),
    err => console.log(err)
));
