import { combineReducers } from 'redux';

import ingredient from './containers/SelectIngredients/reducer';
import technique from './containers/SelectTechnique/reducer';
import unit from './containers/SelectUnit/reducer';

export default combineReducers({
	ingredient,
	technique,
	unit
});
