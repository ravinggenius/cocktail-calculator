import PropTypes from 'prop-types';
import React from 'react';

import Section, { SectionTitle } from '../../components/Section';

import {
	dilution,
	volume,
	ethanol,
	sugar,
	acid
} from './utilities';

const Result = ({ ingredients, technique, unit }) => {
	if (!technique) {
		return <p>Select a technique to view results.</p>;
	}

	return <Section>
		<SectionTitle>Results</SectionTitle>
		<p>Review the final cocktail attributes</p>

		<table>
			<thead>
				<tr>
					<th colSpan="2" />
					<th colSpan="2">Expected Range</th>
				</tr>
				<tr>
					<th>Attribute</th>
					<th>Result</th>
					<th>Low</th>
					<th>High</th>
				</tr>
			</thead>

			<tbody>
				<tr>
					<td>Dilution from mixing (%)</td>
					<td><output>{dilution(technique, ingredients)}</output></td>
					<td>{technique.dilution.low}</td>
					<td>{technique.dilution.high}</td>
				</tr>
				<tr>
					<td>Final Volume</td>
					<td><output>{volume(technique, unit, ingredients)}</output></td>
					<td>{technique.volume.low}</td>
					<td>{technique.volume.high}</td>
				</tr>
				<tr>
					<td>Ethanol (%abv)</td>
					<td><output>{ethanol(technique, ingredients)}</output></td>
					<td>{technique.ethanol.low}</td>
					<td>{technique.ethanol.high}</td>
				</tr>
				<tr>
					<td>Sugar (g/100ml)</td>
					<td><output>{sugar(technique, unit, ingredients)}</output></td>
					<td>{technique.sugar.low}</td>
					<td>{technique.sugar.high}</td>
				</tr>
				<tr>
					<td>Acid (%)</td>
					<td><output>{acid(technique, ingredients)}</output></td>
					<td>{technique.acid.low}</td>
					<td>{technique.acid.high}</td>
				</tr>
			</tbody>
		</table>
	</Section>;
};

Result.defaultProps = {
	technique: null
};

Result.propTypes = {
	ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
	technique: PropTypes.object, // eslint-disable-line react/forbid-prop-types
	unit: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Result;
