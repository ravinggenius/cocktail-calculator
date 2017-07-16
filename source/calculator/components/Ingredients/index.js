import React from 'react';

import Section, { SectionTitle } from '../../components/Section';

const renderAvailableIngredient = ingredient => <li key={ingredient.id}>
	{ingredient.title}
</li>;

const renderAvailableIngredients = (error, ingredients) => {
	if (error && ingredients.length === 0) {
		return <div>
			{error}
		</div>;
	} else {
		return <div>
			<p>Available Ingredients</p>
			<ul>
				{ingredients.map(renderAvailableIngredient)}
			</ul>
		</div>;
	}
};

const findById = ingredients => ({ amount, id }) => {
	const found = ingredients.find(ingredient => ingredient.id === id);

	if (found) {
		return Object.assign({}, found, { amount });
	} else {
		return { amount, id, title: 'cannot find selected ingredient' };
	}
};

const renderSelectedIngredient = ingredient => <li key={ingredient.id}>
	{ingredient.title} - {ingredient.amount}
</li>;

const Ingredients = ({ available, error, selected, onAdd, onChange, onRemove }) => <Section>
	<SectionTitle>Ingredients</SectionTitle>
	<p>Select or search for ingredients and add measurements</p>
	{renderAvailableIngredients(error, available)}
	<p>Selected Ingredients</p>
	<ul>
		{selected.map(findById(available)).map(renderSelectedIngredient)}
	</ul>
</Section>;

export default Ingredients;
