import striptags from 'striptags';

import * as INGREDIENT from './constants';

export const addMeasurement = (id, amount, position) => ({
	type: INGREDIENT.ADD_MEASUREMENT,
	id,
	amount,
	position
});

export const updateMeasurement = (id, amount, position) => ({
	type: INGREDIENT.UPDATE_MEASUREMENT,
	id,
	amount,
	position
});

export const removeMeasurement = id => ({
	type: INGREDIENT.REMOVE_MEASUREMENT,
	id
});

export const receiveAvailable = ingredients => ({
	type: INGREDIENT.RECEIVE_AVAILABLE,
	ingredients
});

export const fetchAvailableError = error => ({
	type: INGREDIENT.FETCH_AVAILABLE_ERROR,
	error
});

const normalize = item => ({
	id: item.id,
	position: item.displayIndex,
	name: item.title,
	description: striptags(item.body, INGREDIENT.WHITELIST_TAGS),
	ethanol: parseFloat(item.customContent.ethanol),
	sugar: parseFloat(item.customContent.sugar),
	acid: parseFloat(item.customContent.acid)
});

export const fetchAvailableSuccess = response => dispatch => response.json()
	.then((body) => {
		if (body.error) {
			throw new Error(body.error);
		}
		return body;
	})
	.then(
		(body) => {
			const ingredients = body.items.map(normalize);
			return dispatch(receiveAvailable(ingredients));
		},
		(error) => {
			console.log(error); // eslint-disable-line no-console
			return dispatch(fetchAvailableError('Error fetching ingredients'));
		}
	);

export const fetchAvailableNetworkError = response => dispatch => response.json()
	.then(body => dispatch(fetchAvailableError(body)));

export const fetchAvailable = () => dispatch => fetch(
	'/calculator-ingredients?format=json'
).then(
	response => dispatch(fetchAvailableSuccess(response)),
	response => dispatch(fetchAvailableNetworkError(response))
);
