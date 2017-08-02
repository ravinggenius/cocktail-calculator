import * as TECHNIQUE from './constants';

// eslint-disable-next-line import/prefer-default-export
export const updateSelected = event => ({
	type: TECHNIQUE.UPDATE_SELECTED,
	selectedCode: event.target.value
});
