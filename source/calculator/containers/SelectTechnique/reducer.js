import { combineReducers } from 'redux';

import * as TECHNIQUE from './constants';

const selectedCode = (state = TECHNIQUE.AVAILABLE[0].code, action) => {
	switch (action.type) {
	case TECHNIQUE.UPDATE_SELECTED:
		return action.selectedCode;
	default:
		return state;
	}
};

export default combineReducers({
	selectedCode
});
