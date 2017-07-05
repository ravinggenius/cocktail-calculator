import buildSelectFor from '../../utilities/buildSelectFor';

const Unit = buildSelectFor([
	{ value: 'ml', name: 'Milliliter' },
	{ value: 'oz', name: 'Ounce' }
]);

export default Unit;
