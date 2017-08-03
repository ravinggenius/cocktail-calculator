import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Ingredients from '../../components/Ingredients';

import * as UNIT from '../SelectUnit/constants';

import { fetchAvailable, addMeasurement, updateMeasurement, removeMeasurement } from './actions';

class SelectIngredients extends React.Component {
	componentDidMount() {
		this.props.fetchAvailable();
	}

	render() {
		const { available, error, measurements, onAdd, onUpdate, onRemove, unit } = this.props;

		const measuredIngredients = measurements.map(({ id, amount, position }) => {
			const found = available.find(ingredient => ingredient.id === id);
			return Object.assign({}, found, { amount, position });
		});

		return <Ingredients
			{...{ available, error, onAdd, onUpdate, onRemove, unit }}
			measurements={measuredIngredients}
		/>;
	}
}

SelectIngredients.propTypes = {
	available: PropTypes.arrayOf(PropTypes.object).isRequired,
	error: PropTypes.string.isRequired,
	fetchAvailable: PropTypes.func.isRequired,
	measurements: PropTypes.arrayOf(PropTypes.object).isRequired,
	onAdd: PropTypes.func.isRequired,
	onUpdate: PropTypes.func.isRequired,
	onRemove: PropTypes.func.isRequired,
	unit: PropTypes.object.isRequired // eslint-disable-line react/forbid-prop-types
};

const mapStateToProps = ({
	ingredient: { available, fetchError: error, measurements },
	unit: { selectedCode }
}) => ({
	available,
	error,
	measurements,
	unit: UNIT.AVAILABLE.find(({ code }) => code === selectedCode)
});

const mapDispatchToProps = dispatch => ({
	fetchAvailable: () => dispatch(fetchAvailable()),
	onAdd: (id, amount, position) => dispatch(addMeasurement(id, amount, position)),
	onUpdate: (id, amount, position) => dispatch(updateMeasurement(id, amount, position)),
	onRemove: id => dispatch(removeMeasurement(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectIngredients);
