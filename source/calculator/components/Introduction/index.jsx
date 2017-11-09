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
	availableTechniques,
	availableUnits,
	selectedTechniqueCode,
	selectedUnitCode,
	updateSelectedTechnique,
	updateSelectedUnit
}) => <Section title="Step 1: Units and Techniques">
	<P>What units are you working with?</P>

	<Select
		onChange={updateSelectedUnit}
		options={availableUnits.map(normalizeOption)}
		value={selectedUnitCode}
	/>

	<P>Select the cocktail technique</P>

	<Select
		onChange={updateSelectedTechnique}
		options={availableTechniques.map(normalizeOption)}
		value={selectedTechniqueCode}
	/>
</Section>;

Introduction.propTypes = {
	availableTechniques: PropTypes.arrayOf(PropTypes.object).isRequired,
	availableUnits: PropTypes.arrayOf(PropTypes.object).isRequired,
	selectedTechniqueCode: PropTypes.string.isRequired,
	selectedUnitCode: PropTypes.string.isRequired,
	updateSelectedTechnique: PropTypes.func.isRequired,
	updateSelectedUnit: PropTypes.func.isRequired
};

export default Introduction;
