import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import promiseMiddleware from 'redux-promise';


import reducers from './reducers';

import PostsIndex from './containers/PostsIndex.cont';
import PostShow from './components/PostShow.comp';
import PostEdit from './containers/PostEdit.cont';
import PostNew from './containers/PostNew.cont';

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
    	<div className="container">
    		<Switch>
    			<Route path="/posts/:id/edit" component={PostEdit} />
	    		<Route path="/posts/:id" component={PostShow} />
	    		<Route path="/new" component={PostNew} />
	    		<Route path="/" component={PostsIndex} />
    		</Switch>
    	</div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
