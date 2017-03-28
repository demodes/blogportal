import axios from 'axios';
import {GET_ARTICLES, GET_MYARTICLE} from './types.js';

const ROOT_URL = 'http://localhost:3090';


export function getMyArticle(title) {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/myarticle`,{
      headers: {title: title}
    })
      .then(response => {
        dispatch({
          type: GET_MYARTICLE,
          payload: response.data.docs
        });
      })
  }
}

export function getArticles() {
  return function(dispatch) {
    axios.get(`${ROOT_URL}/articles`)
      .then(response => {
        dispatch({
          type: GET_ARTICLES,
          payload: response.data.docs
        });
      })
  }
}

export function postArticle({title, abstract, content, author}) {
  return function(dispatch) {
     axios.post(`${ROOT_URL}/article`, {title, abstract, content, author} )
      .then(response => {
      })
  }
}
