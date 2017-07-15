import * as APP from './constants';


export const decrementOutstandingRequests = () => ({
	type: APP.DECREMENT_OUTSTANDING_REQUESTS
});

export const incrementOutstandingRequests = () => ({
	type: APP.INCREMENT_OUTSTANDING_REQUESTS
});


export const receiveAvailableIngredients = (ingredients) => ({
	type: APP.RECEIVE_AVAILABLE_INGREDIENTS,
	ingredients
});

export const fetchAvailableIngredientsSuccess = (response) => (dispatch) => {
	dispatch(decrementOutstandingRequests());
	return response.json()
		.then(body => body.items)
		.then(ingredients => dispatch(receiveAvailableIngredients(ingredients)));
};

export const fetchAvailableIngredientsError = (response) => (dispatch) => {
	dispatch(decrementOutstandingRequests());
	return response
		.then(body => body.json())
		.then(body => console.error(body));
};

export const fetchAvailableIngredients = () => (dispatch) => {
	dispatch(incrementOutstandingRequests());
	return fetch(
		'/calculator/ingredients?format=json'
	).then(
		response => dispatch(fetchAvailableIngredientsSuccess(response)),
		response => dispatch(fetchAvailableIngredientsError(response))
	);
};


export const updateSelectedUnit = (event) => ({
	type: APP.UPDATE_SELECTED_UNIT,
	value: event.target.value
});
