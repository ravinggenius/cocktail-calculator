import React from 'react';

import Section, { SectionTitle } from '../../components/Section';

const TECHNIQUES = [
	{ value: 'shaken', name: 'Shaken', description: 'Shake with 120 grams of 1.25 inch ice cubes (~4 cubes) for 10 seconds' },
	{ value: 'shakenEgg', name: 'Shaken with egg white', description: 'Shake with 120 grams of 1.25 inch ice cubes (~4 cubes) for 10 seconds, strain out ice, add egg white and dry shake for 10 seconds' },
	{ value: 'built', name: 'Built', description: 'Stir directly in your cocktail glass with 120 grams of 1.25 inch ice cubes (~4 cubes) for 15 seconds' },
	{ value: 'stirred', name: 'Stirred', description: 'Stir quickly with 120 grams of 1.25 inch ice cubes (~4 cubes) for 15 seconds' },
	{ value: 'carbonated', name: 'Carbonated', description: 'Pour ingredients into glass with ice, quick stir to mix ingredients' }
];

const renderOption = ({ name, value }) => <option {...{ value }} key={value}>
	{name}
</option>;

const descriptionFor = (value) => TECHNIQUES.find((technique) => technique.value === value).description;

const Technique = ({ onChange, value }) => <Section>
	<SectionTitle>Technique</SectionTitle>
	<p>Select the type of cocktail</p>
	<select {...{ onChange, value }}>
		{TECHNIQUES.map(renderOption)}
	</select>
	<p>{descriptionFor(value)}</p>
</Section>;

export default Technique;
