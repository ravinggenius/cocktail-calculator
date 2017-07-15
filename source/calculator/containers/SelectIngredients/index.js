import React from 'react';
import { connect } from 'react-redux';

import { fetchAvailableIngredients } from '../../actions';

import Ingredients from '../../components/Ingredients';

class SelectIngredients extends React.Component {
	componentDidMount() {
		const { dispatch } = this.props;
		dispatch(fetchAvailableIngredients());
	}

	render() {
		const { available, error, onChange, selected } = this.props;

		return <Ingredients
			{...{ available, error, onChange, selected }}
		/>;
	}
}

const mapStateToProps = ({ availableIngredients, availableIngredientsError, selectedIngredients }) => ({
	available: availableIngredients,
	error: availableIngredientsError,
	selected: selectedIngredients
});

export default connect(mapStateToProps)(SelectIngredients);
