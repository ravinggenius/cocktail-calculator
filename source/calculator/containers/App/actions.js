import {
	ADD_INGREDIENT,
	REMOVE_INGREDIENT,
	UPDATE_INGREDIENT,
	SELECT_TECHNIQUE,
	SELECT_UNIT
} from './constants';

export const handleIngredientAdd = (id, amount) => ({
	type: ADD_INGREDIENT,
	id,
	amount
});

export const handleIngredientRemove = (id) => ({
	type: ADD_INGREDIENT,
	id
});

export const handleTechniqueChange = (event) => ({
	type: SELECT_TECHNIQUE,
	value: event.target.value
});

export const handleUnitChange = (event) => ({
	type: SELECT_UNIT,
	value: event.target.value
});
