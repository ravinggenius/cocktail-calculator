export const orderByPosition = ({ position: a }, { position: b }) => a - b;

export const round = number => Math.round(number * 100) / 100;

export const volume = measurements => measurements.reduce((memo, { amount }) => memo + amount, 0);
