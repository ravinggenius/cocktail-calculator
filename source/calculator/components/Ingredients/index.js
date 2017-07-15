import React from 'react';

import Section, { SectionTitle } from '../../components/Section';

const renderAvailableIngredient = (ingredient) => <li key={ingredient.id}>
	{ingredient.title}
</li>;

const findById = (ingredients) => ({ amount, id }) => {
	const found = ingredients.find((ingredient) => ingredient.id === id);
	return Object.assign({}, found, { amount });
};

const renderSelectedIngredient = (ingredient) => <li key={ingredient.id}>
	{ingredient.title} - {ingredient.amount}
</li>;

const Ingredients = ({ available, selected, onAdd, onChange, onRemove }) => <Section>
	<SectionTitle>Ingredients</SectionTitle>
	<p>Select or search for ingredients and add measurements</p>
	<p>Available Ingredients</p>
	<ul>
		{available.map(renderAvailableIngredient)}
	</ul>
	<p>Selected Ingredients</p>
	<ul>
		{selected.map(findById(available)).map(renderSelectedIngredient)}
	</ul>
</Section>;

export default Ingredients;
