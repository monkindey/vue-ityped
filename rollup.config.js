import nodeResolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

const BUILD_ENV = process.env.BUILD_ENV;
const MIN = process.env.MIN;

const commonCfg = {
	entry: 'src/index.js',
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
var config = {}

if (BUILD_ENV === 'cjs') {
	config = Object.assign(commonCfg, {
		dest: 'lib/vue-ityped.js',
		format: 'cjs'
	})
} else {
	config = Object.assign(commonCfg, {
		dest: 'dist/vue-ityped.js',
		format: 'umd',
	})
}

if (MIN) {
	config.plugins.push(uglify())
	config.dest = 'dist/vue-ityped.min.js'
}

export default config