import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Technique from '../../components/Technique';

import { fetchAvailable, updateSelected } from './actions';

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

SelectTechnique.propTypes = {
	available: PropTypes.arrayOf(PropTypes.object).isRequired,
	error: PropTypes.string.isRequired,
	fetchAvailable: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	selectedId: PropTypes.string.isRequired
};

const mapStateToProps = ({ technique: { available, fetchError: error, selectedId } }) => ({
	available,
	error,
	selectedId
});

const mapDispatchToProps = dispatch => ({
	fetchAvailable: () => dispatch(fetchAvailable()),
	onChange: event => dispatch(updateSelected(event))
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectTechnique);
