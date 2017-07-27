export const round = number => Math.round(number * 100) / 100;

export const dilution = (_technique, _ingredients) => 0;

export const volume = (_technique, _unit, _ingredients) => 0;

export const ethanol = (_technique, _ingredients) => 0;

export const sugar = (_technique, _unit, _ingredients) => 0;

export const acid = (_technique, _ingredients) => 0;

export const isGood = (low, high, actual) => (actual >= low) && (actual <= high);

export const pickMessage = (low, high, lowMessage, highMessage, actual) => {
	if (actual < low) {
		return lowMessage;
	} else if (actual > high) {
		return highMessage;
	} else {
		return 'Good';
	}
};
