import { HOST_URL } from './host_util';
import axios from 'axios';

export const loginFacebook = data => (
  axios({
    method: 'POST',
    url: `${HOST_URL}/api/users/auth0`,
    data: data
  })
);
