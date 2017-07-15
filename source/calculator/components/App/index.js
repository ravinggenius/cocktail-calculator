import React from 'react';

import SelectIngredients from '../../containers/SelectIngredients';
import SelectTechnique from '../../containers/SelectTechnique';
import SelectUnit from '../../containers/SelectUnit';

const App = () => <section>
	<SelectUnit />
	<SelectIngredients />
	<SelectTechnique />
</section>;

export default App;
