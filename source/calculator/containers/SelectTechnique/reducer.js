import { combineReducers } from 'redux';

import * as TECHNIQUE from './constants';

const available = (state = [], action) => {
	switch (action.type) {
	case TECHNIQUE.RECEIVE_AVAILABLE:
		return action.techniques;
	default:
		return state;
	}
};

const fetchError = (state = '', action) => {
	switch (action.type) {
	case TECHNIQUE.FETCH_AVAILABLE_ERROR:
		return action.error;
	default:
		return state;
	}
};

const selectedId = (state = '', action) => {
	switch (action.type) {
	case TECHNIQUE.UPDATE_SELECTED:
		return action.selectedId;
	default:
		return state;
	}
};

export default combineReducers({
	available,
	fetchError,
	selectedId
});
