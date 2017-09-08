import PropTypes from 'prop-types';
import React from 'react';

import Section from '../Section';
import Select from '../Select';

const normalizeOption = ({ code, name }) => ({
	text: name,
	value: code
});

const Unit = ({
	available,
	onChange,
	selectedCode
}) => <Section title="Step 1: Units" description="What units are you working with?">
	<Select {...{ onChange }} options={available.map(normalizeOption)} value={selectedCode} />
</Section>;

Unit.propTypes = {
	available: PropTypes.arrayOf(PropTypes.object).isRequired,
	onChange: PropTypes.func.isRequired,
	selectedCode: PropTypes.string.isRequired
};

export default Unit;
