import { ethanol } from '../../components/Ingredients/utilities';

// eslint-disable-next-line import/prefer-default-export
export const dilutionFor = (code, measurements) => {
	if (!measurements.length) {
		return 0;
	}

	let e;

	switch (code) {
	case 'built':
		return 0.24;
	case 'stirred':
		e = ethanol(measurements) / 100;
		return (-1.21 * (e ** 2)) + (1.246 * e) + 0.145;
	case 'shaken':
	case 'shaken-egg':
		e = ethanol(measurements) / 100;
		return (-1.567 * (e ** 2)) + (1.742 * e) + 0.203;
	default:
		return 0;
	}
};
