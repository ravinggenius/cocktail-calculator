import * as TECHNIQUE from './constants';

export const ensureDefault = techniques => ({
	type: TECHNIQUE.UPDATE_SELECTED,
	selectedId: techniques[0].id
});

export const updateSelected = event => ({
	type: TECHNIQUE.UPDATE_SELECTED,
	selectedId: event.target.value
});

export const receiveAvailable = techniques => ({
	type: TECHNIQUE.RECEIVE_AVAILABLE,
	techniques
});

export const fetchAvailableError = error => ({
	type: TECHNIQUE.FETCH_AVAILABLE_ERROR,
	error
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
			dispatch(receiveAvailable(body.items));
			return dispatch(ensureDefault(body.items));
		},
		(error) => {
			console.log(error); // eslint-disable-line no-console
			return dispatch(fetchAvailableError('Error fetching techniques'));
		}
	);

export const fetchAvailableNetworkError = response => dispatch => response.json()
	.then(body => dispatch(fetchAvailableError(body)));

export const fetchAvailable = () => dispatch => fetch(
	'/calculator-techniques?format=json'
).then(
	response => dispatch(fetchAvailableSuccess(response)),
	response => dispatch(fetchAvailableNetworkError(response))
);
