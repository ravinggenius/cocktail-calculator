import { combineReducers } from 'redux';

import unit from './containers/Introduction/reducer';
import ingredient from './containers/SelectIngredients/reducer';
import technique from './containers/SelectTechnique/reducer';

export default combineReducers({
	ingredient,
	technique,
	unit
});
