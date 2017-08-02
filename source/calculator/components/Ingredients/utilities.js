export const orderByPosition = ({ position: a }, { position: b }) => a - b;

export const round = number => Math.round(number * 100) / 100;

export const format = (suffix, number) => `${round(number)}${suffix}`;

export const volume = measurements => measurements.reduce((memo, { amount }) => memo + amount, 0);

const buildInitial = key => (measurements) => {
	const product = measurements.reduce((memo, m) => memo + (m.amount * m[key]), 0);
	const v = volume(measurements);
	return v ? (product / v) : v;
};

export const ethanol = buildInitial('ethanol');
export const sugar = buildInitial('sugar');
export const acid = buildInitial('acid');
