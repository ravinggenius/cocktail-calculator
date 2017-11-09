import * as TECHNIQUE from './constants_technique';

// eslint-disable-next-line import/prefer-default-export
export const updateSelectedTechnique = event => ({
	type: TECHNIQUE.UPDATE_SELECTED,
	selectedCode: event.target.value
});
