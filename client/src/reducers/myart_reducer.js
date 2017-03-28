import {GET_MYARTICLE} from '../actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case GET_MYARTICLE:
      return action.payload;
  }
  return state;
}
