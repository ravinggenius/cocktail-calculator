import { connect } from 'react-redux';

import Introduction from '../../components/Introduction';

import * as UNIT from './constants_unit';
import { updateSelectedUnit } from './actions_unit';

const mapStateToProps = ({ unit: { selectedCode: selectedUnitCode } }) => ({
	availableUnits: UNIT.AVAILABLE,
	selectedUnitCode
});

const mapDispatchToProps = {
	updateSelectedUnit
};

export default connect(mapStateToProps, mapDispatchToProps)(Introduction);
