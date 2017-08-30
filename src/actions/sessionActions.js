import * as SessionApiUtil from '../util/sessionApiUtil';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutUser = () => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: null
});

export const loginUser = userData => dispatch => (
  SessionApiUtil.loginUser(userData).then(
    ({data}) => dispatch(receiveCurrentUser(data.user)),
    err => console.log(`from sessionAction: ${err}`)
  )
);

export const updateUser = userData => dispatch => (
  SessionApiUtil.updateUser(userData).then(
    ({data}) => dispatch(receiveCurrentUser(data.user)),
    err => console.log(`from sessionAction: ${err}`)
  )
);
