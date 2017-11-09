import { combineReducers } from 'redux';

import unit from './containers/Introduction/reducer_unit';
import ingredient from './containers/SelectIngredients/reducer';
import technique from './containers/SelectTechnique/reducer_technique';

export default combineReducers({
	ingredient,
	technique,
	unit
});
