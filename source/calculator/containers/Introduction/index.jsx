import { connect } from 'react-redux';

import Introduction from '../../components/Introduction';

import * as TECHNIQUE from './constants_technique';
import * as UNIT from './constants_unit';
import { updateSelectedTechnique, updateSelectedUnit } from './actions';

const mapStateToProps = ({
	technique: { selectedCode: selectedTechniqueCode },
	unit: { selectedCode: selectedUnitCode }
}) => ({
	availableTechniques: TECHNIQUE.AVAILABLE,
	availableUnits: UNIT.AVAILABLE,
	selectedTechniqueCode,
	selectedUnitCode
});

const mapDispatchToProps = {
	updateSelectedTechnique,
	updateSelectedUnit
};

export default connect(mapStateToProps, mapDispatchToProps)(Introduction);
