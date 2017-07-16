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
				console.log(error);
				return dispatch(fetchAvailableIngredientsError('Error fetching ingredients'));
			}
		);
};

export const fetchAvailableIngredientsError = error => ({
	type: APP.FETCH_AVAILABLE_INGREDIENTS_ERROR,
	error
});

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


export const receiveAvailableTechniques = techniques => ({
	type: APP.RECEIVE_AVAILABLE_TECHNIQUES,
	techniques
});

export const fetchAvailableTechniquesSuccess = response => (dispatch) => {
	dispatch(decrementOutstandingRequests());
	return response.json()
		.then((body) => {
			if (body.error) {
				throw new Error(body.error);
			}
			return body;
		})
		.then(
			(body) => {
				dispatch(receiveAvailableTechniques(body.items));
				return dispatch(ensureDefaultTechnique(body.items));
			},
			(error) => {
				console.log(error);
				return dispatch(fetchAvailableTechniquesError('Error fetching techniques'));
			}
		);
};

export const fetchAvailableTechniquesError = error => ({
	type: APP.FETCH_AVAILABLE_TECHNIQUES_ERROR,
	error
});

export const fetchAvailableTechniquesNetworkError = response => (dispatch) => {
	dispatch(decrementOutstandingRequests());
	return response.json()
		.then(body => dispatch(fetchAvailableTechniquesError(body)));
};

export const fetchAvailableTechniques = () => (dispatch) => {
	dispatch(incrementOutstandingRequests());
	return fetch(
		'/calculator-techniques?format=json'
	).then(
		response => dispatch(fetchAvailableTechniquesSuccess(response)),
		response => dispatch(fetchAvailableTechniquesNetworkError(response))
	);
};


export const ensureDefaultTechnique = techniques => ({
	type: APP.ENSURE_SELECTED_TECHNIQUE,
	selectedId: techniques[0].id
});

export const updateSelectedTechnique = event => ({
	type: APP.UPDATE_SELECTED_TECHNIQUE,
	selectedId: event.target.value
});


export const updateSelectedUnit = event => ({
	type: APP.UPDATE_SELECTED_UNIT,
	value: event.target.value
});
