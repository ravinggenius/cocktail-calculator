import { dilutionFor } from '../../containers/SelectTechnique/utilities';
import * as initial from '../Ingredients/utilities';

export const round = initial.round;

export const dilution = ({ name }, measurements) => dilutionFor(name, measurements);

export const volume = (technique, measurements) => initial.volume(measurements) * (1 + dilution(technique, measurements));

const buildFinal = key => (technique, measurements) => {
	const reply = (initial.volume(measurements) * initial[key](measurements)) / volume(technique, measurements);
	return Number.isNaN(reply) ? null : reply;
};

export const ethanol = buildFinal('ethanol');
export const sugar = buildFinal('sugar');
export const acid = buildFinal('acid');

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
