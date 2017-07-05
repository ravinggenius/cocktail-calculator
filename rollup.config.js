import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import json from 'rollup-plugin-json';
import nodeResolve from 'rollup-plugin-node-resolve';
import replace from 'rollup-plugin-replace';

export default {
	entry: 'source/calculator/main.js',
	dest: 'scripts/calculator.js',
	format: 'iife',
	sourceMap: true,
	plugins: [
		nodeResolve({
			browser: true,
			jsnext: true,
			main: true
		}),
		replace({
			values: {
				'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
			}
		}),
		commonjs({
			namedExports: {
				'react': [
				   'Component',
				   'createElement'
				]
			},
			sourceMap: true
		}),
		babel({
			exclude: 'node_modules/**'
		}),
		json({
			preferConst: false
		})
	]
};
