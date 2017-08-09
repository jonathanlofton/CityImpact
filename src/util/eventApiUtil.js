import axios from 'axios';

export const fetchAllEvents = () => (
  axios({
    method: 'get',
    url: '/api/events'
  })
);

export const createEvent = (event) => (
  axios({
    method: 'post',
    url: '/api/events',
    data: event
  })
);
