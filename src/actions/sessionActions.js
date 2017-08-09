import * as SessionApiUtil from '../util/sessionApiUtil';

export const facebookAuth = () => dispatch => (
  SessionApiUtil.loginFacebook()
  
);
