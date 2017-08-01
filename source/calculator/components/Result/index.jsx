import PropTypes from 'prop-types';
import React from 'react';

import NumberCell from '../NumberCell';
import Section, { SectionTitle } from '../Section';

import {
	round,
	dilution,
	volume,
	ethanol,
	sugar,
	acid,
	isGood,
	pickMessage,
	contrastFor
} from './utilities';

const ResultRow = ({ actual, range: { low, high }, label, lowMessage, highMessage }) => {
	const backgroundColor = isGood(low, high, actual) ? '#5DFD5D' : '#FD5D5D';
	const color = contrastFor(backgroundColor);

	const style = { backgroundColor, color };

	return <tr>
		<th>{label}</th>
		<NumberCell {...{ style }}><output>{actual}</output></NumberCell>
		<td {...{ style }}><output>{pickMessage(low, high, lowMessage, highMessage, actual)}</output></td>
		<NumberCell>{low}</NumberCell>
		<NumberCell>{high}</NumberCell>
	</tr>;
};

ResultRow.propTypes = {
	actual: PropTypes.number.isRequired,
	range: PropTypes.shape({
		low: PropTypes.number.isRequired,
		high: PropTypes.number.isRequired
	}).isRequired,
	label: PropTypes.string.isRequired,
	lowMessage: PropTypes.string.isRequired,
	highMessage: PropTypes.string.isRequired
};

const Result = ({ ingredients, technique }) => {
	if (!technique) {
		return <p>Select a technique to view results.</p>;
	}

	return <Section>
		<SectionTitle>Results</SectionTitle>
		<p>Review the final cocktail attributes</p>

		<table>
			<thead>
				<tr>
					<th>Attribute</th>
					<th colSpan={2}>Result</th>
					<th>Expected Low</th>
					<th>Expected High</th>
				</tr>
			</thead>

			<tbody>
				<ResultRow
					actual={round(dilution(technique, ingredients))}
					range={technique.dilution}
					label="Dilution from mixing (%)"
					lowMessage="Underdiluted"
					highMessage="Overdiluted"
				/>

				<ResultRow
					actual={round(volume(technique, ingredients))}
					range={technique.volume}
					label="Final Volume"
					lowMessage="Not enough volume"
					highMessage="Too much volume"
				/>

				<ResultRow
					actual={round(ethanol(technique, ingredients))}
					range={technique.ethanol}
					label="Ethanol (%abv)"
					lowMessage="Not enough ethanol"
					highMessage="Too much ethanol"
				/>

				<ResultRow
					actual={round(sugar(technique, ingredients))}
					range={technique.sugar}
					label="Sugar (g/100ml)"
					lowMessage="Not sweet enough"
					highMessage="Too sweet"
				/>

				<ResultRow
					actual={round(acid(technique, ingredients))}
					range={technique.acid}
					label="Acid (%)"
					lowMessage="Not acidic enough"
					highMessage="Too acidic"
				/>
			</tbody>
		</table>
	</Section>;
};

Result.defaultProps = {
	technique: null
};

Result.propTypes = {
	ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
	technique: PropTypes.object // eslint-disable-line react/forbid-prop-types
};

export default Result;
