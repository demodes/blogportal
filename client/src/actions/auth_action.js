import axios from 'axios';
import { browserHistory } from 'react-router';
import {AUTH_USER, AUTH_ERROR, ANAUTH_USER} from './types.js';

const ROOT_URL = 'http://localhost:3090';


export function signinUser({ email, password }) {
  return function(dispatch) {
      axios.post(`${ROOT_URL}/signin`, {email, password})
        .then(response => {
          dispatch({type: AUTH_USER});
          localStorage.setItem('token', response.data.token);
          browserHistory.push('/myprofil');
        })
        .catch(() => {
          dispatch(authError('Bad login info'))
        });
  }
}

export function signupUser({email, password}) {
  return function(dispatch){
    axios.post(`${ROOT_URL}/signup`, {email, password})
      .then(response => {
        dispatch({type: AUTH_USER});
        localStorage.setItem('token', response.data.token);
        browserHistory.push('/myprofil');
      })
      .catch( error => dispatch(authError( error.response.data.error)));
      //.catch(response => dispatch(authError(response.data.error)));
  }
}

export function signoutUser() {
  localStorage.removeItem('token');
  return {
    type: ANAUTH_USER
  };
}

export function authError(error) {
  return {
    type: AUTH_ERROR,
    payload: error
  };
}
