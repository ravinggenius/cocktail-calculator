import React from 'react';

import Section, { SectionTitle } from '../../components/Section';

const renderOption = ({ name, value }) => <option {...{ value }} key={value}>
	{name}
</option>;

const Unit = ({ available, onChange, selected: value }) => <Section>
	<SectionTitle>Units</SectionTitle>
	<p>What units are you working with?</p>
	<select {...{ onChange, value }}>
		{available.map(renderOption)}
	</select>
</Section>;

export default Unit;
