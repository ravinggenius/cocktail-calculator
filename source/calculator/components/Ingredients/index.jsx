import PropTypes from 'prop-types';
import React from 'react';
import striptags from 'striptags';

import LinkButton from '../LinkButton';
import Note from '../Note';
import NumberInput from '../NumberInput';
import P from '../P';
import Section, { SectionTitle } from '../Section';
import Select from '../Select';
import Table, { Row, TD, TH, THead, TBody, TFoot } from '../Table';

import { BLANK_OPTION, WHITELIST_TAGS } from './constants';

import {
	orderByPosition,
	percentage,
	round2,
	volume,
	ethanol,
	sugar,
	acid,
	convertToMl,
	convertToUnit
} from './utilities';

const normalizeOption = ({ id, name }) => ({
	text: name,
	value: id
});

class Ingredients extends React.PureComponent {
	handleAddIngredient({ target }) {
		const position = this.props.measurements.length;
		this.props.onAdd(target.value, 0, position);
	}

	handleChangeIngredient({ target }) {
		const amount = parseFloat(target.dataset.amount, 10);
		const oldSelected = this.props.measurements.find(
			({ id }) => id === target.dataset.ingredientId
		);
		this.props.onRemove(target.dataset.ingredientId);
		this.props.onAdd(target.value, amount, oldSelected.position);
	}

	handleChangeAmount({ target }) {
		const { unit } = this.props;
		const rawAmount = parseFloat(target.value, 10);
		const amount = convertToMl(unit, rawAmount);
		const selected = this.props.measurements.find(({ id }) => id === target.dataset.ingredientId);
		this.props.onUpdate(target.dataset.ingredientId, amount, selected.position);
	}

	handleRemoveIngredient({ target }) {
		this.props.onRemove(target.dataset.ingredientId);
	}

	renderError() {
		const { error } = this.props;
		return error ? <P>{error}</P> : null;
	}

	renderMeasurements() {
		const { measurements, unit } = this.props;

		const step = (unit.code === 'ml') ? 1 : 0.25;

		const renderMeasurement = m => <Row key={m.id}>
			<TD style={{ textAlign: 'center' }}>
				<LinkButton
					onClick={e => this.handleRemoveIngredient(e)}
					data-ingredient-id={m.id}
				/>
			</TD>
			<TD data-label="Change">
				{this.renderSelector(m.id, m.amount, e => this.handleChangeIngredient(e))}
			</TD>
			<TD data-label={`Measurement (${unit.code})`} type="number">
				<NumberInput
					{...{ step }}
					autoFocus
					data-ingredient-id={m.id}
					min={0}
					onChange={e => this.handleChangeAmount(e)}
					value={convertToUnit(unit, m.amount)}
				/>
			</TD>
			<TD data-label="Ethanol (%abv)" type="number">{percentage(m.ethanol)}</TD>
			<TD data-label="Sugar (g/100mg)" type="number">{round2(m.sugar)}</TD>
			<TD data-label="Acid (%)" type="number">{percentage(m.acid)}</TD>
			<TD
				data-label="Notes"
				dangerouslySetInnerHTML={{
					__html: striptags(m.description, WHITELIST_TAGS)
				}}
			/>
		</Row>;

		return [ ...measurements ].sort(orderByPosition).map(renderMeasurement);
	}

	renderSelector(selectedId, amount, onChange) {
		const { available, measurements } = this.props;
		const selectedIds = measurements.map(({ id }) => id);

		const selected = available.find(({ id }) => id === selectedId);
		const unselected = available.filter(({ id }) => !selectedIds.includes(id));

		const options = [
			(selected || BLANK_OPTION),
			...unselected
		].sort(orderByPosition);

		return <Select
			{...{ onChange }}
			dataSet={{ amount, 'ingredient-id': selectedId }}
			options={options.map(normalizeOption)}
			value={selectedId}
		/>;
	}

	render() {
		const { measurements, unit } = this.props;

		return <Section>
			<SectionTitle>Step 2: Ingredients</SectionTitle>

			<P>Select or search for ingredients and add measurements</P>

			{this.renderError()}

			<Table>
				<THead>
					<Row>
						<TH />
						<TH>Ingredient</TH>
						<TH>Measurement ({unit.name})</TH>
						<TH>Ethanol (%abv)</TH>
						<TH>Sugar (g/100mg)</TH>
						<TH>Acid (%)</TH>
						<TH>Notes/Pairings</TH>
					</Row>
				</THead>

				<TBody>
					{this.renderMeasurements()}
					<Row>
						<TD><LinkButton disabled /></TD>
						<TD data-label="Add">
							{this.renderSelector(BLANK_OPTION.id, 0, e => this.handleAddIngredient(e))}
						</TD>
						<TD colSpan={5} />
					</Row>
				</TBody>

				<TFoot>
					<Row>
						<TH colSpan={2}>Initial Totals</TH>
						<TD data-label={`Volume (${unit.code})`} type="number"><output><NumberInput
							readOnly
							value={convertToUnit(unit, volume(measurements))}
						/></output></TD>
						<TD data-label="Ethanol (%abv)" type="number">
							<output>{percentage(ethanol(measurements))}</output>
						</TD>
						<TD data-label="Sugar (g/100mg)" type="number">
							<output>{round2(sugar(measurements))}</output>
						</TD>
						<TD data-label="Acid (%)" type="number">
							<output>{percentage(acid(measurements))}</output>
						</TD>
						<TD />
					</Row>
				</TFoot>
			</Table>

			<Note title="egg white" description="30 ml or 1 oz" />
			<Note title="dash" description="0.8 ml or 0.027 oz" />
			<Note title="barspoon" description="4 ml or ~0.125 oz" />
		</Section>;
	}
}

Ingredients.propTypes = {
	available: PropTypes.arrayOf(PropTypes.object).isRequired,
	error: PropTypes.string.isRequired,
	measurements: PropTypes.arrayOf(PropTypes.object).isRequired,
	onAdd: PropTypes.func.isRequired,
	onUpdate: PropTypes.func.isRequired,
	onRemove: PropTypes.func.isRequired,
	unit: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

export default Ingredients;
