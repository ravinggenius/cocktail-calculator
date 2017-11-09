import { connect } from 'react-redux';

import Introduction from '../../components/Introduction';

import * as UNIT from './constants';
import { updateSelected } from './actions';

const mapStateToProps = ({ unit: { selectedCode } }) => ({
	available: UNIT.AVAILABLE,
	selectedCode
});

const mapDispatchToProps = {
	onChange: updateSelected
};

export default connect(mapStateToProps, mapDispatchToProps)(Introduction);
