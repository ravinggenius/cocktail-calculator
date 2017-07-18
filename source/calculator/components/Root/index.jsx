import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import App from '../App';

import reducer from '../../reducer';

const store = createStore(
	reducer,
	applyMiddleware(
		thunk,
		logger
	)
);

const Root = () => <Provider {...{ store }}>
	<App />
</Provider>;

export default Root;
