import PropTypes from 'prop-types';
import React from 'react';

import P from '../P';
import Section from '../Section';
import Select from '../Select';

const normalizeOption = ({ code, name }) => ({
	text: name,
	value: code
});

const Introduction = ({
	available,
	onChange,
	selectedCode
}) => <Section title="Step 1: Units">
	<P>What units are you working with?</P>

	<Select {...{ onChange }} options={available.map(normalizeOption)} value={selectedCode} />
</Section>;

Introduction.propTypes = {
	available: PropTypes.arrayOf(PropTypes.object).isRequired,
	onChange: PropTypes.func.isRequired,
	selectedCode: PropTypes.string.isRequired
};

export default Introduction;
