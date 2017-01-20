import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';

export default {
	entry: 'src/index.js',
	dest: 'dist/vue-ityped.js',
	format: 'umd',
	moduleName: 'vueTyped',
	plugins: [
		nodeResolve(),
		commonjs({
			include: 'node_modules/**'
		}),
		babel({
			exclude: 'node_modules/**'
		})
	] 
}