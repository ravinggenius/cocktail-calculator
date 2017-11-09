import * as UNIT from './constants_unit';

// eslint-disable-next-line import/prefer-default-export
export const updateSelectedUnit = event => ({
	type: UNIT.UPDATE_SELECTED,
	selectedCode: event.target.value
});
