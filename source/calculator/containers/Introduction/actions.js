import * as TECHNIQUE from './constants_technique';
import * as UNIT from './constants_unit';

export const updateSelectedTechnique = event => ({
	type: TECHNIQUE.UPDATE_SELECTED,
	selectedCode: event.target.value
});

export const updateSelectedUnit = event => ({
	type: UNIT.UPDATE_SELECTED,
	selectedCode: event.target.value
});
