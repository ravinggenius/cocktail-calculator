import React from 'react';

import Section, { SectionTitle } from '../../components/Section';

const Result = ({ ingredients, technique, unit }) => <Section>
	<SectionTitle>Results</SectionTitle>
	<p>Review the final cocktail attributes</p>
	<p>Dilution from mixing (%) <output /> - expected range</p>
	<p>Final Volume <output /> - expected range</p>
	<p>Ethanol (%abv) <output /> - expected range</p>
	<p>Sugar (g/100ml) <output /> - expected range</p>
	<p>Acid (%) <output /> - expected range</p>
</Section>;

export default Result;
