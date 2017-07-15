import React from 'react';

import Section, { SectionTitle } from '../../components/Section';

const renderOption = ({ id, title }) => <option key={id} value={id}>
	{title}
</option>;

const findSelected = (available, selectedId) => available.find((technique) => technique.id === selectedId);

const Technique = ({ available, onChange, selectedId }) => {
	const selected = findSelected(available, selectedId);

	return <Section>
		<SectionTitle>Technique</SectionTitle>
		<p>Select the type of cocktail</p>
		<select {...{ onChange }} value={selectedId}>
			{available.map(renderOption)}
		</select>
		<div dangerouslySetInnerHTML={{ __html: selected && selected.body }} />
	</Section>;
};

export default Technique;
