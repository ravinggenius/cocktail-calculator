import * as INGREDIENT from './constants';

export const addMeasurement = (id, amount) => ({
	type: INGREDIENT.ADD_MEASUREMENT,
	id,
	amount
});

export const updateMeasurement = (id, amount) => ({
	type: INGREDIENT.UPDATE_MEASUREMENT,
	id,
	amount
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
	description: item.body,
	ethanol: parseFloat(item.customContent.ethanol, 10),
	sugar: parseFloat(item.customContent.sugar, 10),
	acid: parseFloat(item.customContent.acid, 10)
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
