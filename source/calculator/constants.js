export const DECREMENT_OUTSTANDING_REQUESTS = 'DECREMENT_OUTSTANDING_REQUESTS';
export const INCREMENT_OUTSTANDING_REQUESTS = 'INCREMENT_OUTSTANDING_REQUESTS';

export const RECEIVE_AVAILABLE_INGREDIENTS = 'RECEIVE_AVAILABLE_INGREDIENTS';
export const FETCH_AVAILABLE_INGREDIENTS_SUCCESS = 'FETCH_AVAILABLE_INGREDIENTS_SUCCESS';
export const FETCH_AVAILABLE_INGREDIENTS_ERROR = 'FETCH_AVAILABLE_INGREDIENTS_ERROR';
export const FETCH_AVAILABLE_INGREDIENTS = 'FETCH_AVAILABLE_INGREDIENTS';

export const LIST_SELECTED_INGREDIENTS = 'LIST_SELECTED_INGREDIENTS';

export const RECEIVE_AVAILABLE_TECHNIQUES = 'RECEIVE_AVAILABLE_TECHNIQUES';
export const FETCH_AVAILABLE_TECHNIQUES_SUCCESS = 'FETCH_AVAILABLE_TECHNIQUES_SUCCESS';
export const FETCH_AVAILABLE_TECHNIQUES_ERROR = 'FETCH_AVAILABLE_TECHNIQUES_ERROR';
export const FETCH_AVAILABLE_TECHNIQUES = 'FETCH_AVAILABLE_TECHNIQUES';

export const ENSURE_SELECTED_TECHNIQUE = 'ENSURE_SELECTED_TECHNIQUE';
export const UPDATE_SELECTED_TECHNIQUE = 'UPDATE_SELECTED_TECHNIQUE';

export const AVAILABLE_UNITS = [
	{ value: 'ml', name: 'Milliliter' },
	{ value: 'oz', name: 'Ounce' }
];

export const UPDATE_SELECTED_UNIT = 'UPDATE_SELECTED_UNIT';