import { connect } from 'react-redux';

import Technique from '../../components/Technique';

import * as TECHNIQUE from './constants_technique';
import { updateSelectedTechnique } from './actions_technique';

const mapStateToProps = ({ technique: { selectedCode: selectedTechniqueCode } }) => ({
	availableTechniques: TECHNIQUE.AVAILABLE,
	selectedTechniqueCode
});

const mapDispatchToProps = {
	updateSelectedTechnique
};

export default connect(mapStateToProps, mapDispatchToProps)(Technique);
