import { combineReducers } from 'redux';

import {
	ADD_INGREDIENT,
	REMOVE_INGREDIENT,
	UPDATE_INGREDIENT,
	SELECT_TECHNIQUE,
	SELECT_UNIT
} from './constants';

const ingredients = (state = [], action) => {
	switch (action.type) {
		case ADD_INGREDIENT:
			return state.concat({
				id: action.id,
				amount: action.amount
			});
		case REMOVE_INGREDIENT:
			return state.filter(({ id }) => id !== action.id);
		case UPDATE_INGREDIENT:
		default:
			return state;
	}
};

const technique = (state = 'shaken', action) => {
	switch (action.type) {
		case SELECT_TECHNIQUE:
			return action.value;
		default:
			return state;
	}
};

const unit = (state = 'ml', action) => {
	switch (action.type) {
		case SELECT_UNIT:
			return action.value;
		default:
			return state;
	}
};

export default combineReducers({
	ingredients,
	technique,
	unit
});
