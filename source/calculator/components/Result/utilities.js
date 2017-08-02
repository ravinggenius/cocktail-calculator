import { parseToRgb } from 'polished';

import * as initial from '../Ingredients/utilities';

export const { percentage, round } = initial;

export const dilution = ({ code }, measurements) => {
	if (!measurements.length) {
		return 0;
	}

	let e;

	switch (code) {
	case 'built':
		return 0.24;
	case 'stirred':
		e = initial.ethanol(measurements);
		return (-1.21 * (e ** 2)) + (1.246 * e) + 0.145;
	case 'shaken':
	case 'shaken-egg':
		e = initial.ethanol(measurements);
		return (-1.567 * (e ** 2)) + (1.742 * e) + 0.203;
	default:
		return 0;
	}
};

export const volume = (technique, measurements) => initial.volume(measurements) * (1 + dilution(technique, measurements));

const buildFinal = key => (technique, measurements) => {
	const v = volume(technique, measurements);
	return v ? ((initial.volume(measurements) * initial[key](measurements)) / v) : v;
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

export const yiqBrightness = (color) => {
	const { red, green, blue } = parseToRgb(color);
	return ((red * 299) + (green * 587) + (blue * 114)) / 1000;
};

export const contrastFor = (color, light = '#000000', dark = '#FFFFFF') => ((yiqBrightness(color) >= 128) ? light : dark);

export const convertToUnit = unit => amount => initial.convertToUnit(unit, amount);
