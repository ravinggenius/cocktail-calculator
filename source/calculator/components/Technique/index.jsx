import PropTypes from 'prop-types';
import React from 'react';

import P from '../P';
import Section from '../Section';
import Select from '../Select';

const normalizeOption = ({ code, name }) => ({
	text: name,
	value: code
});

const findSelected = (available, selectedCode) => available.find(
	technique => technique.code === selectedCode
);

const Technique = ({ available, onChange, selectedCode }) => {
	const selected = findSelected(available, selectedCode);

	return <Section title="Step 3: Technique" description="Select the type of cocktail">
		<Select {...{ onChange }} options={available.map(normalizeOption)} value={selectedCode} />

		<P>{selected.description}</P>
	</Section>;
};

Technique.propTypes = {
	available: PropTypes.arrayOf(PropTypes.object).isRequired,
	onChange: PropTypes.func.isRequired,
	selectedCode: PropTypes.string.isRequired
};

export default Technique;
