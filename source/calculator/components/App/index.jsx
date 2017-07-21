import React from 'react';

import SelectIngredients from '../../containers/SelectIngredients';
import SelectTechnique from '../../containers/SelectTechnique';
import SelectUnit from '../../containers/SelectUnit';
import ShowResult from '../../containers/ShowResult';

const App = () => <section>
	<SelectUnit />
	<SelectIngredients />
	<SelectTechnique />
	<ShowResult />
</section>;

export default App;
