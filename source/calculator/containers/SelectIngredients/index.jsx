import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import { fetchAvailableIngredients } from '../../actions';

import Ingredients from '../../components/Ingredients';

class SelectIngredients extends React.Component {
	componentDidMount() {
		this.props.fetchAvailable();
	}

	render() {
		const { available, error, onChange, selected } = this.props;

		return <Ingredients
			{...{ available, error, onChange, selected }}
		/>;
	}
}

SelectIngredients.defaultProps = {
	error: null
};

SelectIngredients.propTypes = {
	available: PropTypes.arrayOf(PropTypes.object).isRequired,
	error: PropTypes.string,
	fetchAvailable: PropTypes.func.isRequired,
	onChange: PropTypes.func.isRequired,
	selected: PropTypes.arrayOf(PropTypes.object).isRequired
};

const mapStateToProps = ({
	availableIngredients,
	availableIngredientsError,
	selectedIngredients
}) => ({
	available: availableIngredients,
	error: availableIngredientsError,
	selected: selectedIngredients
});

const mapDispatchToProps = dispatch => ({
	fetchAvailable: () => dispatch(fetchAvailableIngredients()),
	onChange: () => null
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectIngredients);
