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
  const { _id, hostedEvents, joinedEvents } = data;
  return axios({
    method: 'PUT',
    url: `${HOST_URL}/api/users/${_id}`,
    data: {
      hostedEvents,
      joinedEvents
    }
  });
};
