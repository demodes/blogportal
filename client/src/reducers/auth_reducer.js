import {AUTH_USER, ANAUTH_USER, AUTH_ERROR } from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case AUTH_USER:
      return {...state, error: '', authenticated: true};
    case ANAUTH_USER:
      return {...state, authenticated: false};
    case AUTH_ERROR:
      return {...state, error:action.payload};
  }
  return state;

}
