import React from 'react';

import Section, { SectionTitle } from '../../components/Section';

import {
	dilution,
	volume,
	ethanol,
	sugar,
	acid
} from './calculations';

const Result = ({ ingredients, technique, unit }) => <Section>
	<SectionTitle>Results</SectionTitle>
	<p>Review the final cocktail attributes</p>
	<p>Dilution from mixing (%) <output>{dilution(technique, ingredients)}</output> - expected range</p>
	<p>Final Volume <output>{volume(technique, unit, ingredients)}</output> - expected range</p>
	<p>Ethanol (%abv) <output>{ethanol(technique, ingredients)}</output> - expected range</p>
	<p>Sugar (g/100ml) <output>{sugar(technique, unit, ingredients)}</output> - expected range</p>
	<p>Acid (%) <output>{acid(technique, ingredients)}</output> - expected range</p>
</Section>;

export default Result;
