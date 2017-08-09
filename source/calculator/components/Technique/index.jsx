import PropTypes from 'prop-types';
import React from 'react';

import Section, { SectionTitle } from '../Section';

const renderOption = ({ code, name }) => <option key={code} value={code}>
	{name}
</option>;

renderOption.propTypes = {
	code: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
};

const findSelected = (available, selectedCode) => available.find(
	technique => technique.code === selectedCode
);

const Technique = ({ available, onChange, selectedCode }) => {
	const selected = findSelected(available, selectedCode);

	return <Section>
		<SectionTitle>Technique</SectionTitle>

		<p>Select the type of cocktail</p>

		<select {...{ onChange }} value={selectedCode}>
			{available.map(renderOption)}
		</select>

		<p>{selected.description}</p>
	</Section>;
};

Technique.propTypes = {
	available: PropTypes.arrayOf(PropTypes.object).isRequired,
	onChange: PropTypes.func.isRequired,
	selectedCode: PropTypes.string.isRequired
};

export default Technique;
