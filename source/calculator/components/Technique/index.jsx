import PropTypes from 'prop-types';
import React from 'react';

import P from '../P';
import Section from '../Section';
import Select from '../Select';

const normalizeOption = ({ code, name }) => ({
	text: name,
	value: code
});

const findSelected = (availableTechniques, selectedTechniqueCode) => availableTechniques.find(
	technique => technique.code === selectedTechniqueCode
);

const Technique = ({ availableTechniques, updateSelectedTechnique, selectedTechniqueCode }) => {
	const selected = findSelected(availableTechniques, selectedTechniqueCode);

	return <Section title="Step 3: Technique">
		<P>Select the type of cocktail and note the technique involved</P>

		<Select
			onChange={updateSelectedTechnique}
			options={availableTechniques.map(normalizeOption)}
			value={selectedTechniqueCode}
		/>

		<P>{selected.description}</P>
	</Section>;
};

Technique.propTypes = {
	availableTechniques: PropTypes.arrayOf(PropTypes.object).isRequired,
	selectedTechniqueCode: PropTypes.string.isRequired,
	updateSelectedTechnique: PropTypes.func.isRequired
};

export default Technique;
