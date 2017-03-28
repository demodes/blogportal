import axios from 'axios';
import { GET_COMMENTS } from './types.js';

const ROOT_URL = 'http://localhost:3090';


export function getComments() {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/getcomments`)
      .then(response => {
        dispatch({
          type: GET_COMMENTS,
          payload: response.data.docs
        });
      })
  }
}

export function postComment({name, content}, articleId) {
  return function(dispatch) {
    axios.post(`${ROOT_URL}/postcomment`, {name, content, articleId})
      .then(response => {
      })
  }
}
