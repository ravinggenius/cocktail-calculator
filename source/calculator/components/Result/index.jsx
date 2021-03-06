import PropTypes from 'prop-types';
import React from 'react';

import P from '../P';
import Section from '../Section';
import Table, { Row, TD, TH, THead, TBody } from '../Table';

import {
	percentage,
	round2,
	dilution,
	volume,
	ethanol,
	sugar,
	acid,
	sugarAcid,
	isGood,
	pickMessage,
	contrastFor,
	convertToUnit
} from './utilities';

const Assessment = TD.extend.withConfig({
	displayName: 'Assessment'
})`
	text-align: center;
`;

const ResultRow = ({ actual, format, range: { low, high }, label, lowMessage, highMessage }) => {
	const backgroundColor = isGood(low, high, actual) ? '#B7E0CD' : '#F4C7C3';
	const color = contrastFor(backgroundColor);

	const style = { backgroundColor, color };

	return <Row>
		<TH>{label}</TH>
		<TD {...{ style }} data-label="Result" type="number"><output>{format(actual)}</output></TD>
		<Assessment {...{ style }} data-label="Assessment"><output>{pickMessage(
			low,
			high,
			lowMessage,
			highMessage,
			actual
		)}</output></Assessment>
		<TD data-label="Expected Low" type="number">{format(low)}</TD>
		<TD data-label="Expected High" type="number">{format(high)}</TD>
	</Row>;
};

ResultRow.propTypes = {
	actual: PropTypes.number.isRequired,
	format: PropTypes.func.isRequired,
	range: PropTypes.shape({
		low: PropTypes.number.isRequired,
		high: PropTypes.number.isRequired
	}).isRequired,
	label: PropTypes.string.isRequired,
	lowMessage: PropTypes.string.isRequired,
	highMessage: PropTypes.string.isRequired
};

const OptionalResultRow = ({ enabled, ...rest }) => (enabled ? <ResultRow {...rest} /> : null);

OptionalResultRow.propTypes = {
	enabled: PropTypes.bool.isRequired
};

const Result = ({
	ingredients,
	technique,
	unit
}) => <Section title="Step 3: Results">
	<P>{technique.description}</P>

	<P>
		Review the final cocktail attributes and try to ensure they stay within the expected range
		for the selected technique
	</P>

	<Table>
		<THead>
			<Row>
				<TH>Attribute</TH>
				<TH>Result</TH>
				<TH>Assessment</TH>
				<TH>Expected Low</TH>
				<TH>Expected High</TH>
			</Row>
		</THead>

		<TBody>
			<ResultRow
				actual={dilution(technique, ingredients)}
				format={percentage}
				range={technique.dilution}
				label="Dilution from mixing (%)"
				lowMessage="Underdiluted"
				highMessage="Overdiluted"
			/>

			<ResultRow
				actual={volume(technique, ingredients)}
				format={convertToUnit(unit)}
				range={technique.volume}
				label={`Final Volume (${unit.code})`}
				lowMessage="Not enough volume"
				highMessage="Too much volume"
			/>

			<ResultRow
				actual={ethanol(technique, ingredients)}
				format={percentage}
				range={technique.ethanol}
				label="Ethanol (%abv)"
				lowMessage="Not enough ethanol"
				highMessage="Too much ethanol"
			/>

			<ResultRow
				actual={sugar(technique, ingredients)}
				format={round2}
				range={technique.sugar}
				label="Sugar (g/100ml)"
				lowMessage="Not sweet enough"
				highMessage="Too sweet"
			/>

			<ResultRow
				actual={acid(technique, ingredients)}
				format={percentage}
				range={technique.acid}
				label="Acid (%)"
				lowMessage="Not acidic enough"
				highMessage="Too acidic"
			/>

			<OptionalResultRow
				enabled={!!technique.sugarAcid}
				actual={sugarAcid(technique, ingredients)}
				format={round2}
				range={technique.sugarAcid}
				label="Sugar/Acid Balance"
				lowMessage={acid(technique, ingredients) === 0 ? 'Too much sugar vs acid' : 'Too much acid vs sugar'}
				highMessage="Too much sugar vs acid"
			/>
		</TBody>
	</Table>
</Section>;

Result.propTypes = {
	ingredients: PropTypes.arrayOf(PropTypes.object).isRequired,
	technique: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
	unit: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Result;
