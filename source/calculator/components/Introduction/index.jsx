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
	availableUnits,
	selectedUnitCode,
	updateSelectedUnit
}) => <Section title="Step 1: Units">
	<P>What units are you working with?</P>

	<Select
		onChange={updateSelectedUnit}
		options={availableUnits.map(normalizeOption)}
		value={selectedUnitCode}
	/>
</Section>;

Introduction.propTypes = {
	availableUnits: PropTypes.arrayOf(PropTypes.object).isRequired,
	selectedUnitCode: PropTypes.string.isRequired,
	updateSelectedUnit: PropTypes.func.isRequired
};

export default Introduction;
