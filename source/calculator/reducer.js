import { combineReducers } from 'redux';

import * as APP from './constants';


// const networkBusy = (state = false, action) => {
// 	switch (action.type) {
// 		case APP.DECREMENT_OUTSTANDING_REQUESTS:
// 			return
// 		default:
// 			return state;
// 	}
// };

// const networkCount = (state = 0, action) => {
// 	switch (action.type) {
// 		case APP.DECREMENT_OUTSTANDING_REQUESTS:
// 			return state - 1;
// 		case APP.INCREMENT_OUTSTANDING_REQUESTS:
// 			return state + 1;
// 		default:
// 			state;
// 	}
// };


const availableIngredients = (state = [], action) => {
	switch (action.type) {
		case APP.RECEIVE_AVAILABLE_INGREDIENTS:
			return action.ingredients;
		default:
			return state;
	}
};

const availableIngredientsError = (state = null, action) => {
	switch (action.type) {
		case APP.FETCH_AVAILABLE_INGREDIENTS_ERROR:
			return action.error;
		default:
			return state;
	}
};

const selectedIngredients = (state = [], action) => {
	switch (action.type) {
		case APP.LIST_SELECTED_INGREDIENTS:
			return action.ingredients;
		default:
			return state;
	}
};


const availableTechniques = (state = [], action) => {
	switch (action.type) {
		case APP.RECEIVE_AVAILABLE_TECHNIQUES:
			return action.techniques;
		default:
			return state;
	}
};

const availableTechniquesError = (state = null, action) => {
	switch (action.type) {
		case APP.FETCH_AVAILABLE_TECHNIQUES_ERROR:
			return action.error;
		default:
			return state;
	}
};

const selectedTechnique = (state = '', action) => {
	switch (action.type) {
		case APP.ENSURE_SELECTED_TECHNIQUE:
		case APP.UPDATE_SELECTED_TECHNIQUE:
			return action.selectedId;
		default:
			return state;
	}
};


const selectedUnit = (state = APP.AVAILABLE_UNITS[0].value, action) => {
	switch (action.type) {
		case APP.UPDATE_SELECTED_UNIT:
			return action.value;
		default:
			return state;
	}
};


export default combineReducers({
	availableIngredients,
	availableIngredientsError,
	selectedIngredients,
	availableTechniques,
	availableTechniquesError,
	selectedTechnique,
	selectedUnit
});
