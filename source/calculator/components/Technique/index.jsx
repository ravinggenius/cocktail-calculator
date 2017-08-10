import PropTypes from 'prop-types';
import React from 'react';

import P from '../P';
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
		<SectionTitle>Step 3: Technique</SectionTitle>

		<P>Select the type of cocktail</P>

		<select {...{ onChange }} value={selectedCode}>
			{available.map(renderOption)}
		</select>

		<P>{selected.description}</P>
	</Section>;
};

Technique.propTypes = {
	available: PropTypes.arrayOf(PropTypes.object).isRequired,
	onChange: PropTypes.func.isRequired,
	selectedCode: PropTypes.string.isRequired
};

export default Technique;
