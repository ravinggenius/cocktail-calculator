import PropTypes from 'prop-types';
import React from 'react';

import LinkButton from '../LinkButton';
import Note from '../Note';
import NumberCell from '../NumberCell';
import NumberInput from '../NumberInput';
import Section, { SectionTitle } from '../Section';

import { BLANK_OPTION } from './constants';

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

class Ingredients extends React.PureComponent {
	handleAddIngredient({ target }) {
		const position = this.props.measurements.length;
		this.props.onAdd(target.value, 0, position);
	}

	handleChangeIngredient({ target }) {
		const amount = parseFloat(target.dataset.amount, 10);
		const oldSelected = this.props.measurements.find(({ id }) => id === target.dataset.ingredientId);
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
		return error ? <p>{error}</p> : null;
	}

	renderMeasurements() {
		const { measurements, unit } = this.props;

		const step = (unit.code === 'ml') ? 1 : 0.25;

		const renderMeasurement = m => <tr key={m.id}>
			<td>
				<LinkButton
					onClick={e => this.handleRemoveIngredient(e)}
					data-ingredient-id={m.id}
				/>
			</td>
			<td>{this.renderSelector(m.id, m.amount, e => this.handleChangeIngredient(e))}</td>
			<NumberCell>
				<NumberInput
					{...{ step }}
					data-ingredient-id={m.id}
					min={0}
					onChange={e => this.handleChangeAmount(e)}
					value={convertToUnit(unit, m.amount)}
				/>
			</NumberCell>
			<NumberCell>{percentage(m.ethanol)}</NumberCell>
			<NumberCell>{round2(m.sugar)}</NumberCell>
			<NumberCell>{percentage(m.acid)}</NumberCell>
		</tr>;

		return [ ...measurements ].sort(orderByPosition).map(renderMeasurement);
	}

	renderNewMeasurement() {
		const { measurements } = this.props;

		if (measurements.every(({ amount }) => amount > 0)) {
			return <tr>
				<td><LinkButton disabled /></td>
				<td>{this.renderSelector(BLANK_OPTION.id, 0, e => this.handleAddIngredient(e))}</td>
				<td colSpan={4} />
			</tr>;
		} else {
			return null;
		}
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

		const wrapOption = ({ id, name }) => <option key={id} value={id}>{name}</option>;

		return <select
			{...{ onChange }}
			data-amount={amount}
			data-ingredient-id={selectedId}
			value={selectedId}
		>{options.map(wrapOption)}</select>;
	}

	render() {
		const { measurements, unit } = this.props;

		return <Section>
			<SectionTitle>Ingredients</SectionTitle>
			<p>Select or search for ingredients and add measurements</p>

			{this.renderError()}

			<table>
				<thead>
					<tr>
						<th />
						<th>Ingredient</th>
						<th>Measurement</th>
						<th>Ethanol (%abv)</th>
						<th>Sugar (g/100mg)</th>
						<th>Acid (%)</th>
					</tr>
				</thead>

				<tbody>
					{this.renderMeasurements()}
					{this.renderNewMeasurement()}
				</tbody>

				<tfoot>
					<tr>
						<th colSpan={2}>Initial Totals</th>
						<NumberCell><output><NumberInput readOnly value={convertToUnit(unit, volume(measurements))} /></output></NumberCell>
						<NumberCell><output>{percentage(ethanol(measurements))}</output></NumberCell>
						<NumberCell><output>{round2(sugar(measurements))}</output></NumberCell>
						<NumberCell><output>{percentage(acid(measurements))}</output></NumberCell>
					</tr>
				</tfoot>
			</table>

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
