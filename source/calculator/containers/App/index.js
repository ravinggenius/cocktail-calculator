import React from 'react';

import Ingredient from '../../components/Ingredient';
import Result from '../../components/Result';
import Section, { SectionTitle } from '../../components/Section';
import Technique from '../../components/Technique';
import Unit from '../../components/Unit';

const App = () => <section>
	<Section>
		<SectionTitle>Units</SectionTitle>
		<p>What units are you working with?</p>
		<Unit />
	</Section>

	<Section>
		<SectionTitle>Ingredients</SectionTitle>
		<p>Select or search for ingredients and add measurements</p>
		<Ingredient />
	</Section>

	<Section>
		<SectionTitle>Technique</SectionTitle>
		<p>Select the type of cocktail</p>
		<Technique />
	</Section>

	<Section>
		<SectionTitle>Results</SectionTitle>
		<p>Review the final cocktail attributes</p>
		<Result />
	</Section>
</section>;

export default App;
