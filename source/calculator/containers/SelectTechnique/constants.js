export const AVAILABLE = [
	{
		code: 'built',
		name: 'Built',
		description: 'Stir directly in your cocktail glass with 120 grams of 1.25 inch ice cubes (~4 cubes) for 15 seconds',
		dilution: { low: 24, high: 24 },
		volume: { low: 88, high: 93 },
		ethanol: { low: 27, high: 32 },
		sugar: { low: 7, high: 8 },
		acid: { low: 0, high: 0 }
	},

	{
		code: 'stirred',
		name: 'Stirred',
		description: 'Stir quickly with 120 grams of 1.25 inch ice cubes (~4 cubes) for 15 seconds',
		dilution: { low: 41, high: 49 },
		volume: { low: 130, high: 142 },
		ethanol: { low: 21, high: 29 },
		sugar: { low: 3.7, high: 5.6 },
		acid: { low: 0, high: 0.2 }
	},

	{
		code: 'shaken',
		name: 'Shaken',
		description: 'Shake with 120 grams of 1.25 inch ice cubes (~4 cubes) for 10 seconds',
		dilution: { low: 51, high: 60 },
		volume: { low: 156, high: 178 },
		ethanol: { low: 15, high: 20 },
		sugar: { low: 5, high: 8.9 },
		acid: { low: 0.76, high: 0.94 }
	},

	{
		code: 'shaken-egg',
		name: 'Shaken with egg white',
		description: 'Shake with 120 grams of 1.25 inch ice cubes (~4 cubes) for 10 seconds, strain out ice, then add egg white and dry shake for 10 seconds',
		dilution: { low: 46, high: 49 },
		volume: { low: 198, high: 209 },
		ethanol: { low: 12, high: 15 },
		sugar: { low: 6.7, high: 9 },
		acid: { low: 0.49, high: 0.68 }
	},

	{
		code: 'carbonated',
		name: 'Carbonated',
		description: 'Pour ingredients into glass with ice, quick stir to mix ingredients',
		dilution: { low: 0, high: 0 },
		volume: { low: 150, high: 180 },
		ethanol: { low: 14, high: 16 },
		sugar: { low: 5, high: 7.5 },
		acid: { low: 0.38, high: 0.51 }
	}
];

export const UPDATE_SELECTED = 'TECHNIQUE.UPDATE_SELECTED';
