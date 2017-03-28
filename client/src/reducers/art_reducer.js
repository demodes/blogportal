import {GET_ARTICLES} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case GET_ARTICLES:
      return action.payload;
  }
  return state;
}
