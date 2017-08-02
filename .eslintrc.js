module.exports = {
	'env': {
		'browser': true,
		'es6': true
	},
	'extends': 'airbnb',
	'rules': {
		'array-bracket-spacing': [ 'error', 'always' ],
		'comma-dangle': [ 'error', 'never' ],
		'indent': [ 'error', 'tab' ],
		'max-len': [ 'warn' ],
		'no-else-return': [ 'off' ],
		'no-tabs': [ 'off' ],
		'no-unused-vars': [ 'error', { argsIgnorePattern: '^_' } ],
		'react/jsx-indent': [ 'error', 'tab' ],
		'react/jsx-indent-props': [ 'error', 'tab' ],
		'react/jsx-wrap-multilines': [ 'off' ]
	}
};
