import axios from 'axios';
import { HOST_URL } from './host_util';

export const fetchAllEvents = () => (
  axios({
    method: 'get',
    url: `${HOST_URL}/api/events`
  })
);

export const fetchSingleEvent = (id) => (
  axios({
    method: 'get',
    url: `${HOST_URL}/api/event/${id}`
  })
);

export const createEvent = (event) => {
  return axios({
    method: 'post',
    url: `${HOST_URL}/api/events`,
    data: event
  }).then(res => console.log(res), error => {
    console.log(error);
  });
};
