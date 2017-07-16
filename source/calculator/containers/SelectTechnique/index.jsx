import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { fetchAvailableTechniques, updateSelectedTechnique } from '../../actions';

import Technique from '../../components/Technique';

class SelectTechnique extends React.Component {
	componentDidMount() {
		this.props.fetchAvailable();
	}

	render() {
		const { available, error, onChange, selectedId } = this.props;

		return <Technique
			{...{ available, error, onChange, selectedId }}
		/>;
	}
}

SelectTechnique.defaultProps = {
	error: null
};

SelectTechnique.propTypes = {
	available: PropTypes.arrayOf(PropTypes.object).isRequired,
	error: PropTypes.string,
	fetchAvailable: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	selectedId: PropTypes.string.isRequired
};

const mapStateToProps = ({ availableTechniques, availableTechniquesError, selectedTechnique }) => ({
	available: availableTechniques,
	error: availableTechniquesError,
	selectedId: selectedTechnique
});

const mapDispatchToProps = dispatch => ({
	fetchAvailable: () => dispatch(fetchAvailableTechniques()),
	onChange: event => dispatch(updateSelectedTechnique(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectTechnique);
