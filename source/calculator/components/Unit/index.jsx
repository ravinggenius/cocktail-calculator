import PropTypes from 'prop-types';
import React from 'react';

import Section, { SectionTitle } from '../../components/Section';

const renderOption = ({ code, name }) => <option key={code} value={code}>
	{name}
</option>;

renderOption.propTypes = {
	code: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
};

const Unit = ({ available, onChange, selectedCode }) => <Section>
	<SectionTitle>Units</SectionTitle>
	<p>What units are you working with?</p>
	<select {...{ onChange }} value={selectedCode}>
		{available.map(renderOption)}
	</select>
</Section>;

Unit.propTypes = {
	available: PropTypes.arrayOf(PropTypes.object).isRequired,
	onChange: PropTypes.func.isRequired,
	selectedCode: PropTypes.string.isRequired
};

export default Unit;
