import PropTypes from 'prop-types';
import React from 'react';

import Section, { SectionTitle } from '../../components/Section';

const renderOption = ({ name, value }) => <option {...{ value }} key={value}>
	{name}
</option>;

renderOption.propTypes = {
	name: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
};

const Unit = ({ available, onChange, selected: value }) => <Section>
	<SectionTitle>Units</SectionTitle>
	<p>What units are you working with?</p>
	<select {...{ onChange, value }}>
		{available.map(renderOption)}
	</select>
</Section>;

Unit.propTypes = {
	available: PropTypes.arrayOf(PropTypes.object).isRequired,
	onChange: PropTypes.func.isRequired,
	selected: PropTypes.string.isRequired
};

export default Unit;
