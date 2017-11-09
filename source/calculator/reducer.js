import { combineReducers } from 'redux';

import technique from './containers/Introduction/reducer_technique';
import unit from './containers/Introduction/reducer_unit';
import ingredient from './containers/SelectIngredients/reducer';

export default combineReducers({
	ingredient,
	technique,
	unit
});
