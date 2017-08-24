export const AVAILABLE = [
	{
		code: 'shaken',
		name: 'Shaken',
		description: 'Shake with 120 grams of 1.25 inch ice cubes (~4 cubes) for 10 seconds',
		dilution: { low: 0.51, high: 0.6 },
		volume: { low: 156, high: 178 },
		ethanol: { low: 0.15, high: 0.2 },
		sugar: { low: 5, high: 8.9 },
		acid: { low: 0.0076, high: 0.0094 }
	},

	{
		code: 'stirred',
		name: 'Stirred',
		description: 'Stir quickly with 120 grams of 1.25 inch ice cubes (~4 cubes) for 15 seconds',
		dilution: { low: 0.41, high: 0.49 },
		volume: { low: 130, high: 142 },
		ethanol: { low: 0.21, high: 0.29 },
		sugar: { low: 3.7, high: 5.6 },
		acid: { low: 0, high: 0.002 }
	},

	{
		code: 'shaken-egg',
		name: 'Shaken with egg white',
		description: 'Shake with 120 grams of 1.25 inch ice cubes (~4 cubes) for 10 seconds, strain out ice, then add egg white and dry shake for 10 seconds',
		dilution: { low: 0.46, high: 0.49 },
		volume: { low: 198, high: 209 },
		ethanol: { low: 0.12, high: 0.15 },
		sugar: { low: 6.7, high: 9 },
		acid: { low: 0.0049, high: 0.0068 }
	},

	{
		code: 'built',
		name: 'Built',
		description: 'Stir directly in your cocktail glass with 120 grams of 1.25 inch ice cubes (~4 cubes) for 15 seconds',
		dilution: { low: 0.24, high: 0.24 },
		volume: { low: 88, high: 93 },
		ethanol: { low: 0.27, high: 0.32 },
		sugar: { low: 7, high: 8 },
		acid: { low: 0, high: 0 }
	},

	{
		code: 'carbonated',
		name: 'Carbonated',
		description: 'Pour ingredients into glass with ice, quick stir to mix ingredients',
		dilution: { low: 0, high: 0 },
		volume: { low: 150, high: 180 },
		ethanol: { low: 0.14, high: 0.16 },
		sugar: { low: 5, high: 7.5 },
		acid: { low: 0.0038, high: 0.0051 }
	}
];

export const UPDATE_SELECTED = 'TECHNIQUE.UPDATE_SELECTED';
