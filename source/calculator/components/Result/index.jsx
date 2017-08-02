import PropTypes from 'prop-types';
import React from 'react';

import NumberCell from '../NumberCell';
import Section, { SectionTitle } from '../Section';

import {
	format,
	dilution,
	volume,
	ethanol,
	sugar,
	acid,
	isGood,
	pickMessage,
	contrastFor
} from './utilities';

const ResultRow = ({ actual, format: formatStr, range: { low, high }, label, lowMessage, highMessage }) => {
	const backgroundColor = isGood(low, high, actual) ? '#5DFD5D' : '#FD5D5D';
	const color = contrastFor(backgroundColor);

	const style = { backgroundColor, color };

	return <tr>
		<th>{label}</th>
		<NumberCell {...{ style }}><output>{format(formatStr, actual)}</output></NumberCell>
		<td {...{ style }}><output>{pickMessage(low, high, lowMessage, highMessage, actual)}</output></td>
		<NumberCell>{format(formatStr, low)}</NumberCell>
		<NumberCell>{format(formatStr, high)}</NumberCell>
	</tr>;
};

ResultRow.defaultProps = {
	format: ''
};

ResultRow.propTypes = {
	actual: PropTypes.number.isRequired,
	format: PropTypes.string,
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
					actual={dilution(technique, ingredients)}
					format="%"
					range={technique.dilution}
					label="Dilution from mixing (%)"
					lowMessage="Underdiluted"
					highMessage="Overdiluted"
				/>

				<ResultRow
					actual={volume(technique, ingredients)}
					range={technique.volume}
					label="Final Volume"
					lowMessage="Not enough volume"
					highMessage="Too much volume"
				/>

				<ResultRow
					actual={ethanol(technique, ingredients)}
					format="%"
					range={technique.ethanol}
					label="Ethanol (%abv)"
					lowMessage="Not enough ethanol"
					highMessage="Too much ethanol"
				/>

				<ResultRow
					actual={sugar(technique, ingredients)}
					range={technique.sugar}
					label="Sugar (g/100ml)"
					lowMessage="Not sweet enough"
					highMessage="Too sweet"
				/>

				<ResultRow
					actual={acid(technique, ingredients)}
					format="%"
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
