import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';

import App from './containers/App';
import reducer from './containers/App/reducer';

const store = createStore(
	reducer,
	applyMiddleware(
		logger
	)
);

ReactDOM.render(
	<Provider {...{ store }}><App /></Provider>,
	document.getElementById('calculator-root')
);
