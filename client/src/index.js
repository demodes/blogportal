import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import reduxThunk from 'redux-thunk';

import App from './components/app';
import Signin from './components/auth/signin';
import Signout from './components/auth/signout';
import Signup from './components/auth/signup';
import RequireAuth from './components/auth/require_auth';
import reducers from './reducers';
import { AUTH_USER} from './actions/types';
import Articles from './components/articles';
import PostArticle from './components/member/post_article';
import MyProfil from  './components/member/my_profil';
import SearchArticle from './components/member/search_article';
import ShowArticle from './components/show_article';

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(reducers);

const token = localStorage.getItem('token');
//if we have a token, consider the user sign in
if (token) {
    //we need to update application state
    store.dispatch({type: AUTH_USER});
}

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App}>
        <IndexRoute component={Articles}/>
        <Route path='signin' component={Signin}/>
        <Route path='signout' component={Signout}/>
        <Route path='signup' component={Signup}/>
        <Route path='myprofil' component={RequireAuth(MyProfil)}/>
        <Route path='article' component={RequireAuth(PostArticle)}/>
        <Route path='search' component={RequireAuth(SearchArticle)}/>
        <Route path='clanok/:id' component={ShowArticle}/>
      </Route>
    </Router>
  </Provider>
  , document.querySelector('.container'));
