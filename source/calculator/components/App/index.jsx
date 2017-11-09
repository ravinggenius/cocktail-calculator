import React from 'react';
import { injectGlobal } from 'styled-components';

import 'react-select/dist/react-select.css';

import Introduction from '../../containers/Introduction';
import SelectIngredients from '../../containers/SelectIngredients';
import SelectTechnique from '../../containers/SelectTechnique';
import ShowResult from '../../containers/ShowResult';

import Attribution from '../Attribution';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
	.header-announcement-wrapper {
		background-color: #FFFFFF;
	}
`;

const App = () => <section>
	<Introduction />
	<SelectIngredients />
	<SelectTechnique />
	<ShowResult />
	<Attribution />
</section>;

export default App;
