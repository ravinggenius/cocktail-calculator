import React from 'react';
import { connect } from 'react-redux';

import Ingredients from '../../components/Ingredients';
import Result from '../../components/Result';
import Technique from '../../components/Technique';
import Unit from '../../components/Unit';

import {
	handleIngredientAdd,
	handleIngredientRemove,
	handleTechniqueChange,
	handleUnitChange
} from './actions';

const App = ({ ingredients, technique, unit, onIngredientAdd, onIngredientRemove, onTechniqueChange, onUnitChange }) => <section>
	<Unit onChange={onUnitChange} value={unit} />
	<Ingredients {...{ ingredients }} onAdd={onIngredientAdd} onRemove={onIngredientRemove} />
	<Technique onChange={onTechniqueChange} value={technique} />
	<Result {...{ ingredients, technique, unit }} />
</section>;

const mapStateToProps = ({ ingredients, technique, unit }) => ({ ingredients, technique, unit });

const mapDispatchToProps = (dispatch) => ({
	onIngredientAdd: (id, amount) => dispatch(handleIngredientAdd(id, amount)),
	onIngredientRemove: (id) => dispatch(handleIngredientRemove(id)),
	onTechniqueChange: (technique) => dispatch(handleTechniqueChange(technique)),
	onUnitChange: (unit) => dispatch(handleUnitChange(unit))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
