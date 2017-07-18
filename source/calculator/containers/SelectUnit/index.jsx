import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Unit from '../../components/Unit';

import * as UNIT from './constants';
import { updateSelected } from './actions';

const SelectUnit = ({ available, onChange, selectedCode }) => <Unit
	{...{ available, onChange, selectedCode }}
/>;

SelectUnit.propTypes = {
	available: PropTypes.arrayOf(PropTypes.object).isRequired,
	onChange: PropTypes.func.isRequired,
	selectedCode: PropTypes.string.isRequired
};

const mapStateToProps = ({ unit: { selectedCode } }) => ({
	available: UNIT.AVAILABLE,
	selectedCode
});

const mapDispatchToProps = {
	onChange: updateSelected
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectUnit);
