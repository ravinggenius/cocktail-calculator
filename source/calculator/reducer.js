import { combineReducers } from 'redux';

import * as APP from './constants';

import technique from './containers/SelectTechnique/reducer';
import unit from './containers/SelectUnit/reducer';


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


export default combineReducers({
	availableIngredients,
	availableIngredientsError,
	selectedIngredients,
	technique,
	unit
});
