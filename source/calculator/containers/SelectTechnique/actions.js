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

const normalizeRange = (item, key) => ({
	[key]: {
		low: parseFloat(item.customContent[`${key}Low`], 10),
		high: parseFloat(item.customContent[`${key}High`], 10)
	}
});

const normalize = item => Object.assign(
	{
		id: item.id,
		name: item.title,
		description: item.body
	},
	normalizeRange(item, 'dilution'),
	normalizeRange(item, 'volume'),
	normalizeRange(item, 'ethanol'),
	normalizeRange(item, 'sugar'),
	normalizeRange(item, 'acid')
);

export const fetchAvailableSuccess = response => dispatch => response.json()
	.then((body) => {
		if (body.error) {
			throw new Error(body.error);
		}
		return body;
	})
	.then(
		(body) => {
			const techniques = body.items.map(normalize);
			dispatch(receiveAvailable(techniques));
			return dispatch(ensureDefault(techniques));
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
