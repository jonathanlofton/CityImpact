import * as SessionApiUtil from '../util/sessionApiUtil';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const loginFacebook = facebookData => dispatch => (
  SessionApiUtil.loginFacebook(facebookData).then(
    ({data}) => dispatch(receiveCurrentUser(data.user)),
    err => console.log(`from sessionAction: ${err}`)
));
