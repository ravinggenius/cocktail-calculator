import React from 'react';

import Section, { SectionTitle } from '../../components/Section';

const UNITS = [
	{ value: 'ml', name: 'Milliliter' },
	{ value: 'oz', name: 'Ounce' }
];

const renderOption = ({ name, value }) => <option {...{ value }} key={value}>
	{name}
</option>;

const Unit = ({ onChange, value }) => <Section>
	<SectionTitle>Units</SectionTitle>
	<p>What units are you working with?</p>
	<select {...{ onChange, value }}>
		{UNITS.map(renderOption)}
	</select>
</Section>;

export default Unit;
