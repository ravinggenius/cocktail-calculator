import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Ingredients from '../../components/Ingredients';

import { fetchAvailable, addMeasurement, updateMeasurement, removeMeasurement } from './actions';

class SelectIngredients extends React.Component {
	componentDidMount() {
		this.props.fetchAvailable();
	}

	render() {
		const { available, error, measurements, onAdd, onUpdate, onRemove } = this.props;

		const measuredIngredients = measurements.map(({ id, amount }) => {
			const found = available.find(ingredient => ingredient.id === id);
			return Object.assign({}, found, { amount });
		});

		return <Ingredients
			{...{ available, error, onAdd, onUpdate, onRemove }}
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
	onRemove: PropTypes.func.isRequired
};

const mapStateToProps = ({ ingredient: { available, fetchError: error, measurements } }) => ({
	available,
	error,
	measurements
});

const mapDispatchToProps = dispatch => ({
	fetchAvailable: () => dispatch(fetchAvailable()),
	onAdd: (id, amount) => dispatch(addMeasurement(id, amount)),
	onUpdate: (id, amount) => dispatch(updateMeasurement(id, amount)),
	onRemove: id => dispatch(removeMeasurement(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectIngredients);
