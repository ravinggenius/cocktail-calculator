import PropTypes from 'prop-types';
import React from 'react';

import P from '../P';
import Section, { SectionTitle } from '../Section';
import Select from '../Select';

const normalizeOption = ({ code, name }) => ({
	text: name,
	value: code
});

const Unit = ({ available, onChange, selectedCode }) => <Section>
	<SectionTitle>Step 1: Units</SectionTitle>

	<P>What units are you working with?</P>

	<Select {...{ onChange }} options={available.map(normalizeOption)} value={selectedCode} />
</Section>;

Unit.propTypes = {
	available: PropTypes.arrayOf(PropTypes.object).isRequired,
	onChange: PropTypes.func.isRequired,
	selectedCode: PropTypes.string.isRequired
};

export default Unit;
