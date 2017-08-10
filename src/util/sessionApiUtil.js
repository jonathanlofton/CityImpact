import { HOST_URL } from './host_util';

export const loginFacebook = () => (
  fetch({
    method: 'GET',
    url: `${HOST_URL}/auth/facebook`
  })
);
