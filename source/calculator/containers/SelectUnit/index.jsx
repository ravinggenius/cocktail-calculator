import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { AVAILABLE_UNITS } from '../../constants';
import { updateSelectedUnit } from '../../actions';

import Unit from '../../components/Unit';

const SelectUnit = ({ available, onChange, selected }) => <Unit
	{...{ available, onChange, selected }}
/>;

SelectUnit.propTypes = {
	available: PropTypes.arrayOf(PropTypes.object).isRequired,
	onChange: PropTypes.func.isRequired,
	selected: PropTypes.string.isRequired
};

const mapStateToProps = ({ selectedUnit }) => ({
	available: AVAILABLE_UNITS,
	selected: selectedUnit
});

const mapDispatchToProps = {
	onChange: updateSelectedUnit
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectUnit);
