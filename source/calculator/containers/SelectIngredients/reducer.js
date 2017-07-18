import { combineReducers } from 'redux';

import * as INGREDIENT from './constants';

const available = (state = [], action) => {
	switch (action.type) {
	case INGREDIENT.RECEIVE_AVAILABLE:
		return action.ingredients;
	default:
		return state;
	}
};

const fetchError = (state = '', action) => {
	switch (action.type) {
	case INGREDIENT.FETCH_AVAILABLE_ERROR:
		return action.error;
	default:
		return state;
	}
};

const selectedIds = (state = [], action) => {
	switch (action.type) {
	case INGREDIENT.UPDATE_SELECTED:
		return action.selectedIds;
	default:
		return state;
	}
};

export default combineReducers({
	available,
	fetchError,
	selectedIds
});
