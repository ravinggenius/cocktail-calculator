import { combineReducers } from 'redux';

import * as APP from './constants';

const selectedUnit = (state = APP.AVAILABLE_UNITS[0].value, action) => {
	switch (action.type) {
		case APP.UPDATE_SELECTED_UNIT:
			return action.value;
		default:
			return state;
	}
};

export default combineReducers({
	selectedUnit
});
