import axios from 'axios';
import { HOST_URL } from './host_util';

export const fetchAllEvents = () => {
  return axios({
    method: 'GET',
    url: `${HOST_URL}/api/events`
  });

  // .then(res => console.log(res), error => {
  //   console.log(error);
  // });
};

export const fetchSingleEvent = (id) => {
  return axios({
    method: 'GET',
    url: `${HOST_URL}/api/event/${id}`
  });
};

export const createEvent = event => {
  return axios({
    method: 'POST',
    url: `${HOST_URL}/api/events`,
    data: event
  });
};

export const updateEvent = data => {
  const { _id, attendees } = data;
  return axios({
    method: 'PUT',
    url: `${HOST_URL}/api/event/${_id}`,
    data: { attendees }
  });
};
