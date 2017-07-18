import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Ingredients from '../../components/Ingredients';

import { fetchAvailable, updateSelected } from './actions';

class SelectIngredients extends React.Component {
	componentDidMount() {
		this.props.fetchAvailable();
	}

	render() {
		const { available, error, onChange, selectedIds } = this.props;

		return <Ingredients
			{...{ available, error, onChange, selectedIds }}
		/>;
	}
}

SelectIngredients.propTypes = {
	available: PropTypes.arrayOf(PropTypes.object).isRequired,
	error: PropTypes.string.isRequired,
	fetchAvailable: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	selectedIds: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = ({ ingredient: { available, fetchError: error, selectedIds } }) => ({
	available,
	error,
	selectedIds
});

const mapDispatchToProps = dispatch => ({
	fetchAvailable: () => dispatch(fetchAvailable()),
	onChange: () => dispatch(updateSelected())
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectIngredients);
