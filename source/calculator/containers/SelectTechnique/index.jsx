import { connect } from 'react-redux';

import Technique from '../../components/Technique';

import * as TECHNIQUE from './constants';
import { updateSelected } from './actions';

const mapStateToProps = ({ technique: { selectedCode } }) => ({
	available: TECHNIQUE.AVAILABLE,
	selectedCode
});

const mapDispatchToProps = dispatch => ({
	onChange: event => dispatch(updateSelected(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(Technique);
