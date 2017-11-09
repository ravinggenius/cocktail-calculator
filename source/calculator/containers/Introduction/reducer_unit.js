import { combineReducers } from 'redux';

import * as UNIT from './constants_unit';

const selectedCode = (state = UNIT.AVAILABLE[0].code, action) => {
	switch (action.type) {
	case UNIT.UPDATE_SELECTED:
		return action.selectedCode;
	default:
		return state;
	}
};

export default combineReducers({
	selectedCode
});
