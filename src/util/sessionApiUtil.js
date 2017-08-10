import fetchival from 'fetchival';
import _ from 'lodash';

var myHeaders = new Headers();

var myInit = { method: 'GET',
               headers: myHeaders,
               mode: 'cors',
               cache: 'default' };

export const loginFacebook = () => {
  return fetch({
    method: 'GET',
    url: 'https://cityimpact.herokuapp.com/api/events',
    body: null
  }).then(
    data => console.log(data)
  ).catch(err => console.log(err));
};
