import { HOST_URL } from './host_util';

export const loginFacebook = () => {
  return fetch({
    method: 'GET',
    url: `${HOST_URL}/auth/facebook`
  });
};
