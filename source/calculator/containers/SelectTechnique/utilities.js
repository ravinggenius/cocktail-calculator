import { ethanol } from '../../components/Ingredients/utilities';

// eslint-disable-next-line import/prefer-default-export
export const dilutionFor = (name, measurements) => {
	let e;

	switch (name) {
	case 'Built':
		return 0.24;
	case 'Stirred':
		e = ethanol(measurements) / 100;
		return (-1.21 * (e ** 2)) + (1.246 * e) + 0.145;
	case 'Shaken':
	case 'Shaken with egg white':
		e = ethanol(measurements) / 100;
		return (-1.567 * (e ** 2)) + (1.742 * e) + 0.203;
	default:
		return 0;
	}
};
