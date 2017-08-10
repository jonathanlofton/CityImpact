import axios from 'axios';
import { HOST_URL } from './host_util';

export const fetchAllEvents = () => {
  return axios({
    method: 'get',
    url: `${HOST_URL}/api/events`
  }).then(res => console.log(res), error => {
    console.log(error);
  });
};

export const fetchSingleEvent = (id) => {
  return axios({
    method: 'get',
    url: `${HOST_URL}/api/event/${id}`
  }).then(res => console.log(res), error => {
    console.log(error);
  });
};

export const createEvent = (event) => {
  return axios({
    method: 'post',
    url: `${HOST_URL}/api/events`,
    data: event
  }).then(res => console.log(res), error => {
    console.log(error);
  });
};
