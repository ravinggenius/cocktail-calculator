import React from 'react';
import { injectGlobal } from 'styled-components';

import SelectIngredients from '../../containers/SelectIngredients';
import SelectTechnique from '../../containers/SelectTechnique';
import SelectUnit from '../../containers/SelectUnit';
import ShowResult from '../../containers/ShowResult';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
	.header-announcement-wrapper {
		background-color: #FFFFFF;
	}
`;

const App = () => <section>
	<SelectUnit />
	<SelectIngredients />
	<SelectTechnique />
	<ShowResult />
</section>;

export default App;
