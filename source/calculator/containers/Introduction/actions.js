import * as UNIT from './constants';

// eslint-disable-next-line import/prefer-default-export
export const updateSelected = event => ({
	type: UNIT.UPDATE_SELECTED,
	selectedCode: event.target.value
});
