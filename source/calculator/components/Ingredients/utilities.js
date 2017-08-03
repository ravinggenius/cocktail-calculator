export const orderByPosition = ({ position: a }, { position: b }) => a - b;

export const round2 = number => Math.round(number * 100) / 100;

export const percentage = number => `${round2(number * 100)}%`;

export const volume = measurements => measurements.reduce((memo, { amount }) => memo + (amount || 0), 0);

const buildInitial = key => (measurements) => {
	const product = measurements.reduce((memo, m) => memo + ((m.amount || 0) * m[key]), 0);
	const v = volume(measurements);
	return v ? (product / v) : v;
};

export const ethanol = buildInitial('ethanol');
export const sugar = buildInitial('sugar');
export const acid = buildInitial('acid');

export const convertToMl = ({ code }, amount) => ({
	ml: amount,
	oz: amount * 28.4131
}[code]);

export const convertToUnit = ({ code }, amount) => ({
	ml: round2(amount),
	oz: round2(amount * 0.03519503)
}[code]);
