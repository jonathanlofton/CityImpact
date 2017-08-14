import { HOST_URL } from './host_util';
import axios from 'axios';

export const loginUser = data => (
  axios({
    method: 'POST',
    url: `${HOST_URL}/api/users/auth0`,
    data: data
  })
);

export const updateUser = data => {
  const { id, hostedEvents, joinedEvents } = data;
  return axios({
    method: 'PATCH',
    url: `${HOST_URL}/api/users/${id}`,
    data: {
      hostedEvents,
      joinedEvents
    }
  });
};
