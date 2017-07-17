import * as APP from './constants';


export const decrementOutstandingRequests = () => ({
	type: APP.DECREMENT_OUTSTANDING_REQUESTS
});

export const incrementOutstandingRequests = () => ({
	type: APP.INCREMENT_OUTSTANDING_REQUESTS
});


export const receiveAvailableIngredients = ingredients => ({
	type: APP.RECEIVE_AVAILABLE_INGREDIENTS,
	ingredients
});

export const fetchAvailableIngredientsError = error => ({
	type: APP.FETCH_AVAILABLE_INGREDIENTS_ERROR,
	error
});

export const fetchAvailableIngredientsSuccess = response => (dispatch) => {
	dispatch(decrementOutstandingRequests());
	return response.json()
		.then((body) => {
			if (body.error) {
				throw new Error(body.error);
			}
			return body;
		})
		.then(
			body => dispatch(receiveAvailableIngredients(body.items)),
			(error) => {
				console.log(error); // eslint-disable-line no-console
				return dispatch(fetchAvailableIngredientsError('Error fetching ingredients'));
			}
		);
};

export const fetchAvailableIngredientsNetworkError = response => (dispatch) => {
	dispatch(decrementOutstandingRequests());
	return response.json()
		.then(body => dispatch(fetchAvailableIngredientsError(body)));
};

export const fetchAvailableIngredients = () => (dispatch) => {
	dispatch(incrementOutstandingRequests());
	return fetch(
		'/calculator-ingredients?format=json'
	).then(
		response => dispatch(fetchAvailableIngredientsSuccess(response)),
		response => dispatch(fetchAvailableIngredientsNetworkError(response))
	);
};
