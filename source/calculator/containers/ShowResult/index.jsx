import { connect } from 'react-redux';

import Result from '../../components/Result';
import * as UNIT from '../SelectUnit/constants';

const findById = items => id => items.find(item => item.id === id);

const mapStateToProps = ({ ingredient, technique, unit }) => {
	const findIngredientById = findById(ingredient.available);

	return {
		ingredients: ingredient.selectedIds.map(id => Object.assign(
			{},
			findIngredientById(id),
			{ amount: null }
		)),
		technique: findById(technique.available)(technique.selectedId),
		unit: UNIT.AVAILABLE.find(u => u.code === unit.selectedCode)
	};
};

export default connect(mapStateToProps)(Result);
