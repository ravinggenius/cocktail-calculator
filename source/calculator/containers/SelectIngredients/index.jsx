import { connect } from 'react-redux';

import Ingredients from '../../components/Ingredients';

import * as UNIT from '../Introduction/constants_unit';

import { fetchAvailable, addMeasurement, updateMeasurement, removeMeasurement } from './actions';

const mapStateToProps = ({
	ingredient: { available, fetchError: error, measurements },
	unit: { selectedCode }
}) => ({
	available,
	error,
	measurements: measurements.map(({ id, amount, position }) => {
		const found = available.find(ingredient => ingredient.id === id);
		return Object.assign({}, found, { amount, position });
	}),
	unit: UNIT.AVAILABLE.find(({ code }) => code === selectedCode)
});

const mapDispatchToProps = dispatch => ({
	fetchAvailable: () => dispatch(fetchAvailable()),
	onAdd: (id, amount, position) => dispatch(addMeasurement(id, amount, position)),
	onUpdate: (id, amount, position) => dispatch(updateMeasurement(id, amount, position)),
	onRemove: id => dispatch(removeMeasurement(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(Ingredients);
