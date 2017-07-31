import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Technique from '../../components/Technique';

import * as TECHNIQUE from './constants';
import { updateSelected } from './actions';

const SelectTechnique = ({ available, onChange, selectedCode }) => <Technique
	{...{ available, onChange, selectedCode }}
/>;

SelectTechnique.propTypes = {
	available: PropTypes.arrayOf(PropTypes.object).isRequired,
	onChange: PropTypes.func.isRequired,
	selectedCode: PropTypes.string.isRequired
};

const mapStateToProps = ({ technique: { selectedCode } }) => ({
	available: TECHNIQUE.AVAILABLE,
	selectedCode
});

const mapDispatchToProps = dispatch => ({
	onChange: event => dispatch(updateSelected(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectTechnique);
