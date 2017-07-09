import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './containers/App';
import reducer from './containers/App/reducer';

const store = createStore(reducer);

ReactDOM.render(
	<Provider {...{ store }}><App /></Provider>,
	document.getElementById('calculator-root')
);
