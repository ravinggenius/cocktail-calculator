export const orderByPosition = ({ position: a }, { position: b }) => a - b;

export const round = number => Math.round(number * 100) / 100;

export const volume = (measurements) => {
	const reply = measurements.reduce((memo, m) => memo + m.amount, 0);
	return Number.isNaN(reply) ? null : reply;
};

const buildInitial = key => (measurements) => {
	const product = measurements.reduce((memo, m) => memo + (m.amount * m[key]), 0);
	const reply = product / volume(measurements);
	return Number.isNaN(reply) ? null : reply;
};

export const ethanol = buildInitial('ethanol');
export const sugar = buildInitial('sugar');
export const acid = buildInitial('acid');
