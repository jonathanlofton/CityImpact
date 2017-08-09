import axios from 'axios';

export const loginFacebook = () => (
  axios({
    method: 'get',
    url: '/auth/facebook'
  })
);
