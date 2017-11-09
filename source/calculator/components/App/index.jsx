import React from 'react';
import { injectGlobal } from 'styled-components';

import 'react-select/dist/react-select.css';

import Introduction from '../../containers/Introduction';
import SelectIngredients from '../../containers/SelectIngredients';
import ShowResult from '../../containers/ShowResult';

import Attribution from '../Attribution';
import P from '../P';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
	.header-announcement-wrapper {
		background-color: #FFFFFF;
	}
`;

const App = () => <section>
	<P>
		Use the Cocktail Calculator to create your own balanced cocktail recipes, but note that
		creating a cocktail is also an art. These assessments should simply be used as guidance.
	</P>

	<Introduction />
	<SelectIngredients />
	<ShowResult />
	<Attribution />
</section>;

export default App;
