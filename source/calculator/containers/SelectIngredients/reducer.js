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

const measurements = (state = [], action) => {
	const withoutMeasurement = ({ id }) => (id !== action.id);

	switch (action.type) {
	case INGREDIENT.ADD_MEASUREMENT:
		return state.concat({ id: action.id, amount: action.amount, position: action.position });
	case INGREDIENT.UPDATE_MEASUREMENT:
		return state
			.filter(withoutMeasurement)
			.concat({ id: action.id, amount: action.amount, position: action.position });
	case INGREDIENT.REMOVE_MEASUREMENT:
		return state.filter(withoutMeasurement);
	default:
		return state;
	}
};

export default combineReducers({
	available,
	fetchError,
	measurements
});
