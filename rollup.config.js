import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import eslint from 'rollup-plugin-eslint';
import json from 'rollup-plugin-json';
import nodeResolve from 'rollup-plugin-node-resolve';
import postcss from 'rollup-plugin-postcss';
import replace from 'rollup-plugin-replace';

export default {
	entry: 'source/calculator/main.jsx',
	dest: 'scripts/calculator.js',
	format: 'iife',
	sourceMap: true,
	plugins: [
		eslint({
			throwOnError: true
		}),
		nodeResolve({
			browser: true,
			jsnext: true,
			extensions: [ '.js', '.jsx' ],
			main: true
		}),
		commonjs({
			namedExports: {
				'redux-logger': [
					'createLogger'
				],
				'react': [
					'Children',
					'Component',
					'createElement'
				]
			},
			sourceMap: true
		}),
		postcss({
			extensions: [ '.css' ]
		}),
		replace({
			values: {
				'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
			}
		}),
		babel({
			exclude: 'node_modules/**'
		}),
		json({
			preferConst: false
		})
	]
};
