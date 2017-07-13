import * as APP from './constants';

export const updateSelectedUnit = (event) => ({
	type: APP.UPDATE_SELECTED_UNIT,
	value: event.target.value
});
