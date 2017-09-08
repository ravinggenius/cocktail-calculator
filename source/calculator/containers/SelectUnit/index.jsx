import { connect } from 'react-redux';

import Unit from '../../components/Unit';

import * as UNIT from './constants';
import { updateSelected } from './actions';

const mapStateToProps = ({ unit: { selectedCode } }) => ({
	available: UNIT.AVAILABLE,
	selectedCode
});

const mapDispatchToProps = {
	onChange: updateSelected
};

export default connect(mapStateToProps, mapDispatchToProps)(Unit);
