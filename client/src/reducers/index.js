import { combineReducers } from 'redux';
import {reducer as form} from 'redux-form';
import authReducer from './auth_reducer';
import artReducer from './art_reducer';
import myArtReducer from './myart_reducer';
import CommentReducer from './comment_reducer';

const rootReducer = combineReducers({
  form, //povodne form: form ;(ak je rovnaky nazov)
  auth: authReducer,
  art: artReducer,
  myart: myArtReducer,
  comments: CommentReducer
});

export default rootReducer;
